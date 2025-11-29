from rest_framework import generics, status, views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404
from django.utils import timezone
import logging

from ..models import CustomUser, EmailVerificationToken
from ..serializers import (
    RegisterSerializer,
    LoginSerializer,
    ResendVerificationLinkSerializer,  # ← your working one
)

logger = logging.getLogger(__name__)


# Helper: generate JWT tokens
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        tokens = get_tokens_for_user(user)

        return Response({
            "success": True,
            "message": "Registration successful. Please verify your email.",
            "user": {
                "id": user.id,
                "email": user.email,
                "username": user.username,
                "handlename": user.handlename,
                "is_email_verified": user.is_email_verified
            },
            "tokens": tokens
        }, status=status.HTTP_201_CREATED)


class LoginView(views.APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data['user']  
        tokens = get_tokens_for_user(user)

        return Response({
            "success": True,
            "message": "Login successful",
            "user": {
                "id": user.id,
                "email": user.email,
                "username": user.username,
                "handlename": user.handlename,
                "is_email_verified": user.is_email_verified
            },
            "tokens": tokens
        }, status=status.HTTP_200_OK)


class LogoutView(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh")
            if not refresh_token:
                return Response({"detail": "Refresh token required"}, status=400)

            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response({"detail": "Logged out successfully"}, status=200)
        except Exception as e:
            return Response({"detail": "Invalid token"}, status=400)


class VerifyEmailView(views.APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        token = request.query_params.get('token')
        email = request.query_params.get('email')

        if not token or not email:
            return Response({"detail": "Invalid link"}, status=400)

        token_obj = get_object_or_404(EmailVerificationToken, token=token, user__email=email)

        if not token_obj.is_valid():
            token_obj.delete()
            return Response({"detail": "Link expired or already used"}, status=400)

        user = token_obj.user
        user.is_email_verified = True
        user.save(update_fields=['is_email_verified'])
        token_obj.delete()

        return Response({
            "detail": "Email verified successfully!",
            "email": user.email
        }, status=200)


class ResendVerificationView(views.APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ResendVerificationLinkSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            "detail": "Verification email sent successfully"
        }, status=200)