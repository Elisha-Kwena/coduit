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

class InterestCatgoryList(generics.ListAPIView):
    queryset = InterestCategory.objects.filter(is_active=True)
    serializer_class = InterestCategorySerializer
    permission_classes = [permissions.AllowAny]


class InterestList(generics.ListAPIView):
    serializer_class = InterestSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        queryset = InterestModel.objects.all()
        category_id = self.request.query_params.get('category_id',None)
        if category_id:
            queryset = queryset.filter(category_id=category_id)
        popular = self.request.query_params.get('popular',None)
        if popular:
            queryset = queryset.filter(is_popular=True)
        return queryset
    
class UserInterestsListView(generics.RetrieveUpdateAPIView):
    serializer_class = UserInterestSerializer
    permission_classes= [permissions.IsAuthenticated]

    def get_object(self):
        user_interest,create = UserInterests.objects.get_or_create(user=self.request.user)
        return user_interest
    
class SelectInitialInterestsView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = InterestSelectionSerializer

    def perform_create(self, serializer):
        interest_ids = serializer.validated_data['interest_ids']
        user_interests, _ = UserInterests.objects.get_or_create(user=self.request.user)
        interests = InterestModel.objects.filter(id__in=interest_ids)
        user_interests.interest.set(interests)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Custom success response
        interests = InterestModel.objects.filter(id__in=serializer.validated_data['interest_ids'])
        return Response({
            'message': 'Welcome! Your interests have been saved.',
            'selected_interests': InterestSerializer(interests, many=True).data
        }, status=status.HTTP_201_CREATED)