# account/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import CustomUser, EmailVerificationToken, PasswordResetToken


@admin.register(CustomUser)
class CustomUserAdmin(BaseUserAdmin):
    """Beautiful, professional admin for your users"""
    list_display = (
        'email', 'username', 'handlename', 'is_email_verified',
        'is_active', 'is_staff', 'mentorship', 'date_joined',
        'followers_count', 'following_count', 'friends_count'
    )
    list_filter = (
        'is_email_verified', 'is_active', 'is_staff',
        'mentorship', 'date_joined', 'pronouns'
    )
    search_fields = ('email', 'username', 'handlename', 'occupation', 'location', 'bio')
    ordering = ('-date_joined',)
    list_per_page = 50

    fieldsets = (
        (None, {
            'fields': ('email', 'username', 'handlename', 'password')
        }),
        (_('Profile Info'), {
            'fields': (
                'avatar', 'cover_photo', 'bio', 'location', 'birth_date',
                'occupation', 'pronouns', 'mentorship'
            )
        }),
        (_('Social Links'), {
            'fields': (
                'website', 'github_url', 'discord_url', 'instagram_url',
                'twitter_url', 'linkedin_url', 'youtube_url', 'reddit_url',
                'upwork_url', 'fiverr_url', 'facebook_url'
            ),
            'classes': ('collapse',)  # hidden by default
        }),
        (_('Stats'), {
            'fields': ('followers_count', 'following_count', 'friends_count'),
            'classes': ('collapse',)
        }),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')
        }),
        (_('Important dates'), {
            'fields': ('last_login', 'date_joined'),
        }),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'handlename', 'password1', 'password2'),
        }),
    )

    readonly_fields = (
        'date_joined', 'last_login',
        'followers_count', 'following_count', 'friends_count'
    )

    filter_horizontal = ('groups', 'user_permissions', 'friends')


@admin.register(EmailVerificationToken)
class EmailVerificationTokenAdmin(admin.ModelAdmin):
    list_display = ('user', 'token', 'created_at', 'expires_at', 'is_valid')
    list_filter = ('created_at', 'expires_at')
    search_fields = ('user__email', 'user__username', 'token')
    readonly_fields = ('token', 'created_at', 'expires_at')
    raw_id_fields = ('user',)

    def has_add_permission(self, request):
        return False  # Never create manually

    def has_change_permission(self, request, obj=None):
        return False  # Only view

    def is_valid(self, obj):
        return obj.is_valid()
    is_valid.boolean = True
    is_valid.short_description = "Valid?"


@admin.register(PasswordResetToken)
class PasswordResetTokenAdmin(admin.ModelAdmin):
    list_display = ('user', 'token', 'created_at', 'expires_at', 'is_expired')
    list_filter = ('created_at',)
    search_fields = ('user__email', 'token')
    readonly_fields = ('token', 'created_at', 'expires_at')
    raw_id_fields = ('user',)

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def is_expired(self, obj):
        return obj.is_expired()
    is_expired.boolean = True
    is_expired.short_description = "Expired?"