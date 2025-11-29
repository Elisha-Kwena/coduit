# users/views/public.py
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from ..models import CustomUser
from ..serializers import UserSerializer


class PublicUserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CustomUser.objects.filter(is_active=True)
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    lookup_field = 'handlename'           # → /users/@john
    lookup_url_kwarg = 'handlename'


