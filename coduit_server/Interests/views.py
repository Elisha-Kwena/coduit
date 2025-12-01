# interests/views.py
from rest_framework import generics, status, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from .models import InterestCategory, InterestModel, UserInterests
from .serializers import (
    InterestCategorySerializer,
    InterestSerializer,
    UserInterestSerializer,
    InterestSelectionSerializer,
)


# 1. List all active categories (+ count of interests)
class InterestCategoryList(generics.ListAPIView):
    queryset = InterestCategory.objects.filter(is_active=True).prefetch_related('interests')
    serializer_class = InterestCategorySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = None  # Usually small number of categories


# 2. List interests with filtering (by category or popular)
class InterestsList(generics.ListAPIView):
    serializer_class = InterestSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = None  # Optional: remove if you want pagination

    def get_queryset(self):
        queryset = InterestModel.objects.select_related('category').all()

        category_id = self.request.query_params.get('category_id')
        if category_id is not None:
            queryset = queryset.filter(category_id=category_id)

        popular = self.request.query_params.get('popular')
        if popular == 'true':
            queryset = queryset.filter(is_popular=True)

        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(interest__icontains=search)

        return queryset.order_by('interest')  # Consistent ordering


# 3. Get + Update current user's interests (one endpoint does both)
class UserInterestsView(generics.RetrieveUpdateAPIView):
    serializer_class = UserInterestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Always return the user's profile (create if missing)
        obj, _ = UserInterests.objects.get_or_create(user=self.request.user)
        return obj

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    # PUT/PATCH automatically uses serializer.update() → clean & safe



# 4. Onboarding: First-time interest selection (can be reused later)
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def initial_interest_selection(request):
    serializer = InterestSelectionSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    interest_ids = serializer.validated_data['interest_ids']
    user_interests, _ = UserInterests.objects.get_or_create(user=request.user)

    # Replace all current interests
    interests = InterestModel.objects.filter(id__in=interest_ids)
    user_interests.interest.set(interests)

    return Response({
        'message': 'Interests saved successfully!',
        'count': interests.count(),
        'selected_interests': InterestSerializer(interests, many=True).data
    }, status=status.HTTP_200_OK)


# 5. Optional: Simple GET for frontend (if you don't want to use RetrieveUpdateAPIView)
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def my_interests(request):
    user_interests, _ = UserInterests.objects.get_or_create(user=request.user)
    serializer = UserInterestSerializer(user_interests)
    return Response(serializer.data)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def save_user_interests(request):
    """
    Fully syncs user's selected interests.
    - Keeps existing ones that are still in the list
    - Adds new ones
    - Removes ones that were deselected
    → Perfect for your Topics page
    """
    interest_ids = request.data.get("interest_ids", [])

    if not isinstance(interest_ids, list):
        return Response({"detail": "interest_ids must be a list"}, status=400)

    user = request.user

    # Get current user's selected interest IDs
    current_ids = set(
        UserInterests.objects.filter(user=user)
        .values_list("interest_id", flat=True)
    )

    # Convert incoming to set
    new_ids = set(interest_ids)

    # === ADD new ones ===
    to_add = new_ids - current_ids
    if to_add:
        interests_to_add = InterestModel.objects.filter(id__in=to_add)
        UserInterests.objects.bulk_create(
            [UserInterests(user=user, interest=interest) for interest in interests_to_add],
            ignore_conflicts=True,  # safe if race condition
        )

    # === REMOVE deselected ones ===
    to_remove = current_ids - new_ids
    if to_remove:
        UserInterests.objects.filter(user=user, interest_id__in=to_remove).delete()

    return Response({
        "detail": "Interests updated successfully",
        "selected_count": len(new_ids)
    }, status=200)