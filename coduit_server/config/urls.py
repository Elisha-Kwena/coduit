# project/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # JWT Authentication endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),      # POST → login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),    # POST → get new access token

    # Your apps
    path('api/', include('account.urls')),           # e.g. register, profile, etc.
    path('api/interests/', include('interests.urls')), # your topics endpoints
]