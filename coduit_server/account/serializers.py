# account/serializers.py
from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from django.core.mail import send_mail
from django.utils import timezone
from django.contrib.auth.password_validation import CommonPasswordValidator
from django.core.exceptions import ValidationError as DjangoValidationError
from datetime import timedelta
import os
import re
import logging

from .models import CustomUser, EmailVerificationToken, PasswordResetToken

logger = logging.getLogger(__name__)



# ===================== HELPER: Strong Password Validation =====================
def validate_strong_password(value):
    """Used in Register & Password Reset"""
    if len(value) < 8:
        raise serializers.ValidationError(_("Password must be at least 8 characters long."))

    if value.isdigit():
        raise serializers.ValidationError(_("Password cannot be entirely numeric."))

    if not re.search(r'[A-Za-z]', value):
        raise serializers.ValidationError(_("Password must contain at least one letter."))

    if not re.search(r'\d', value):
        raise serializers.ValidationError(_("Password must contain at least one number."))

    # Check common passwords
    try:
        CommonPasswordValidator().validate(value)
    except DjangoValidationError as exc:
        raise serializers.ValidationError(_("This password is too common."))

    return value


# ===================== REGISTER SERIALIZER =====================
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        style={'input_type': 'password'},
        validators=[validate_strong_password],
        min_length=8,
    )
    password_confirm = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = CustomUser
        fields = [
            'email', 'username', 'handlename', 'password', 'password_confirm',
            'avatar', 'cover_photo', 'bio', 'location', 'birth_date', 'occupation',
            'pronouns', 'mentorship', 'website', 'github_url', 'discord_url',
            'instagram_url', 'twitter_url', 'upwork_url', 'fiverr_url',
            'facebook_url', 'youtube_url', 'linkedin_url', 'reddit_url'
        ]

    def validate_email(self, value):
        if CustomUser.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError(_("A user with this email already exists."))
        return value.lower()

    def validate_username(self, value):
        if CustomUser.objects.filter(username__iexact=value).exists():
            raise serializers.ValidationError(_("A user with this username already exists."))
        return value

    def validate_handlename(self, value):
        if CustomUser.objects.filter(handlename__iexact=value).exists():
            raise serializers.ValidationError(_("This handle is already taken."))
        if not re.match(r'^@?[\w]+$', value):
            raise serializers.ValidationError(_("Handle can only contain letters, numbers, and underscores."))
        return value.lstrip('@')  # save without @

    def validate(self, data):
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError({"password_confirm": _("Passwords do not match.")})
        return data

    def create(self, validated_data):
        validated_data.pop('password_confirm')
        password = validated_data.pop('password')
        
        user = CustomUser.objects.create_user(
            email=validated_data['email'], 
            password=password, 
            **{k: v for k, v in validated_data.items() if k != 'email'}  # exclude email
            )
        
        # Create verification token
        token = EmailVerificationToken.objects.create(user=user)

        # Send email
        if self.context.get('request'):
            frontend_url = os.getenv('FRONTEND_URL', 'http://localhost:3000').rstrip("/")
            verification_url = f"{frontend_url}/verify-email?token={token.token}&email={user.email}"
            
            send_mail(
                subject=_("Verify your email address"),
                message=_(
                    f"Hi {user.username},\n\n"
                    f"Click below to verify your email:\n\n"
                    f"{verification_url}\n\n"
                    f"If you didn't sign up, ignore this email."
                ),
                from_email=None,
                recipient_list=[user.email],
                fail_silently=False,
            )
        return user


# ===================== RESEND VERIFICATION =====================
class ResendVerificationLinkSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        try:
            user = CustomUser.objects.get(email__iexact=value)
            if user.is_email_verified:
                raise serializers.ValidationError(_("This email is already verified."))
            return value.lower()
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError(_("No account found with this email."))

    def save(self):
        email = self.validated_data['email']
        user = CustomUser.objects.get(email__iexact=email)
        
        EmailVerificationToken.objects.filter(user=user).delete()
        token = EmailVerificationToken.objects.create(user=user)

        frontend_url = os.getenv('FRONTEND_URL', 'http://localhost:3000')
        verification_url = f"{frontend_url}/verify-email?token={token.token}&email={user.email}"
        
        send_mail(
            subject=_("Verify Your Email Address"),
            message=_(
                f"Hi {user.username},\n\n"
                f"Click to verify:\n\n{verification_url}\n\n"
                f"Ignore if you didn't request this."
            ),
            from_email=None,
            recipient_list=[email],
            fail_silently=False,
        )
        return user


# ===================== LOGIN =====================
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    def validate(self, data):
        email = data.get('email').lower()
        password = data.get('password')
        
        user = CustomUser.objects.filter(email__iexact=email).first()
        if not user or not user.check_password(password):
            raise serializers.ValidationError(_("Invalid email or password."))
        if not user.is_active:
            raise serializers.ValidationError(_("This account is disabled."))
        if not user.is_email_verified:
            raise serializers.ValidationError(_("Please verify your email first."))
        
        data['user'] = user
        return data


# =========================================================== uSER DETAILS SERIALIZER=============================================================

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 'email', 'username', 'handlename', 'avatar', 'cover_photo',
            'bio', 'location', 'birth_date', 'occupation', 'pronouns',
            'website', 'github_url', 'twitter_url', 'linkedin_url',
            'followers_count', 'following_count', 'friends_count',
            'is_email_verified', 'date_joined'
        ]
        read_only_fields = ['id', 'email', 'is_email_verified', 'date_joined', 'followers_count', ...]

    # This magic method hides sensitive fields for public views
    def to_representation(self, instance):
        data = super().to_representation(instance)
        
        # If this is a public profile view (not /me/)
        if self.context.get('view') and self.context['view'].basename != 'my-profile':
            # Hide private stuff from strangers
            data.pop('email', None)
            data.pop('birth_date', None)
            data.pop('date_joined', None)
            # Add more if needed

        return data


# ===================== PASSWORD RESET =====================
class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        try:
            user = CustomUser.objects.get(email__iexact=value, is_active=True)
            return value.lower()
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError(_("No active account found with this email."))

    def save(self):
        email = self.validated_data['email']
        user = CustomUser.objects.get(email__iexact=email)
        PasswordResetToken.objects.filter(user=user).delete()
        token = PasswordResetToken.objects.create(user=user)

        reset_url = f"{os.getenv('FRONTEND_URL', 'http://localhost:3000')}/password-reset-confirm?token={token.token}&email={user.email}"
        
        send_mail(
            subject=_("Reset Your Password"),
            message=_(
                f"Hi {user.username},\n\n"
                f"Click to reset your password:\n\n{reset_url}\n\n"
                f"Link expires in 1 hour. Ignore if you didn't request this."
            ),
            from_email=None,
            recipient_list=[email],
            fail_silently=False,
        )
        return user


class PasswordResetConfirmSerializer(serializers.Serializer):
    token = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, style={'input_type': 'password'}, validators=[validate_strong_password])
    password_confirm = serializers.CharField(write_only=True, style={'input_type': 'password'})

    def validate(self, data):
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError({"password_confirm": _("Passwords do not match.")})
        
        try:
            user = CustomUser.objects.get(email__iexact=data['email'])
            token_obj = PasswordResetToken.objects.get(user=user, token=data['token'])
            if token_obj.is_expired():
                token_obj.delete()
                raise serializers.ValidationError(_("This reset link has expired."))
        except (CustomUser.DoesNotExist, PasswordResetToken.DoesNotExist):
            raise serializers.ValidationError(_("Invalid or expired reset link."))
        
        return data

    def save(self):
        email = self.validated_data['email']
        password = self.validated_data['password']
        user = CustomUser.objects.get(email__iexact=email)
        user.set_password(password)
        user.save()
        
        PasswordResetToken.objects.filter(user=user).delete()
        return user