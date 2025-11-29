# account/views/password_reset.py
from rest_framework import views, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.contrib.auth import get_user_model
import logging

from ..models import PasswordResetToken
from ..serializers import (
    PasswordResetRequestSerializer,
    PasswordResetConfirmSerializer,
)

logger = logging.getLogger(__name__)
User = get_user_model()


class PasswordResetRequestView(views.APIView):
    """
    POST /api/auth/password-reset/
    → User enters email → we send reset link
    """
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = PasswordResetRequestSerializer(
            data=request.data,
            context={'request': request}  # needed for email sending
        )
        if serializer.is_valid():
            serializer.save()
            logger.info(f"Password reset email sent to {request.data.get('email')}")
            return Response({
                "detail": "Password reset link sent to your email."
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetConfirmView(views.APIView):
    """
    POST /api/auth/password-reset/confirm/
    → User submits token + new password → password changed
    """
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            logger.info(f"Password successfully reset for {user.email}")

            return Response({
                "detail": "Password has been reset successfully. You can now log in."
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)