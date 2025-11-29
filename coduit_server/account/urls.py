from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views.auth import (
    RegisterView,
    LoginView,
    LogoutView,
    VerifyEmailView,
    ResendVerificationView
)

from .views.profile import MyProfileView
from .views.public import PublicUserViewSet
from .views.password_reset import (    
    PasswordResetRequestView,
    PasswordResetConfirmView,
)

router = DefaultRouter()
router.register(r'accounts', PublicUserViewSet, basename='account')  # ← changed to 'accounts'

urlpatterns = [
# Auth
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),
    path('auth/verify-email/', VerifyEmailView.as_view(), name='verify-email'),
    path('auth/resend-verification/', ResendVerificationView.as_view(), name='resend-verification'),

# Password Reset - NEW
    path('auth/password-reset/', PasswordResetRequestView.as_view(), name='password-reset-request'),
    path('auth/password-reset/confirm/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    
# Profiles
    path('profile/me/', MyProfileView.as_view(), name='my-profile'),

# Public
    path('', include(router.urls)),
]