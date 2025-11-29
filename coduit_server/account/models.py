from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from datetime import timedelta
import uuid
from uuid import uuid4
import logging

logger = logging.getLogger(__name__)

from .managers import CustomUserManager

class CustomUser(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    email = models.EmailField(
        verbose_name=_("email address"),
        max_length=255,
        unique=True,
        error_messages={
            'unique': _('A user with that email already exists')
        }
    )
    username = models.CharField(
        verbose_name=_('username'),
        max_length=30,
        unique=True,
        error_messages={
            'unique': _('A user with that username already exists.'),
        }
    )
    handlename = models.CharField(
        verbose_name=_('handle name'),
        max_length=50,
        unique=True,
        error_messages={
            'unique': _('A user with that handle name already exists.'),
        }
    )
    avatar = models.ImageField(
        verbose_name=_('avatar'),
        upload_to='avatars/%Y/%m/%d/',
        blank=True,
        null=True,
        help_text=_('Profile picture for the user.')
    )
    cover_photo = models.ImageField(
        verbose_name=_('cover photo'),
        upload_to='cover_photos/%Y/%m/%d/',
        blank=True,
        null=True,
        help_text=_('Cover photo or banner for the user profile.')
    )
    bio = models.TextField(
        verbose_name=_('bio'),
        max_length=500,
        blank=True,
        help_text=_('A short description about the user.')
    )
    location = models.CharField(
        verbose_name=_('location'),
        max_length=100,
        blank=True,
        help_text=_('User\'s location (e.g., city, country).')
    )
    birth_date = models.DateField(
        verbose_name=_('birth date'),
        blank=True,
        null=True,
        help_text=_('User\'s birth date.')
    )
    occupation = models.CharField(
        verbose_name=_('occupation'),
        max_length=100,
        blank=True,
        help_text=_('User\'s job or profession.')
    )
    pronouns = models.CharField(
        verbose_name=_('pronouns'),
        max_length=20,
        blank=True,
        help_text=_('User\'s preferred pronouns (e.g., she/her, he/him, they/them).')
    )
    mentorship = models.BooleanField(
        verbose_name=_('offers mentorship'),
        default=False,
        help_text=_('Indicates whether the user offers mentorship.')
    )
    website = models.URLField(
        verbose_name=_('website'),
        blank=True,
        help_text=_('User\'s personal website.')
    )
    github_url = models.URLField(
        verbose_name=_('GitHub URL'),
        blank=True,
        help_text=_('User\'s GitHub profile URL.')
    )
    discord_url = models.URLField(
        verbose_name=_('Discord URL'),
        blank=True,
        help_text=_('User\'s Discord profile or server invite URL.')
    )
    instagram_url = models.URLField(
        verbose_name=_('Instagram URL'),
        blank=True,
        help_text=_('User\'s Instagram profile URL.')
    )
    twitter_url = models.URLField(
        verbose_name=_('Twitter URL'),
        blank=True,
        help_text=_('User\'s Twitter profile URL.')
    )
    upwork_url = models.URLField(
        verbose_name=_('Upwork URL'),
        blank=True,
        help_text=_('User\'s Upwork profile URL.')
    )
    fiverr_url = models.URLField(
        verbose_name=_('Fiverr URL'),
        blank=True,
        help_text=_('User\'s Fiverr profile URL.')
    )
    facebook_url = models.URLField(
        verbose_name=_('Facebook URL'),
        blank=True,
        help_text=_('User\'s Facebook profile URL.')
    )
    youtube_url = models.URLField(
        verbose_name=_('YouTube URL'),
        blank=True,
        help_text=_('User\'s YouTube channel URL.')
    )
    linkedin_url = models.URLField(
        verbose_name=_('LinkedIn URL'),
        blank=True,
        help_text=_('User\'s LinkedIn profile URL.')
    )
    reddit_url = models.URLField(
        verbose_name=_('Reddit URL'),
        blank=True,
        help_text=_('User\'s Reddit profile URL.')
    )
    is_active = models.BooleanField(
        verbose_name=_('active'),
        default=True,
        help_text=_('Designates whether this user should be treated as active. Unselect this instead of deleting accounts.')
    )
    is_staff = models.BooleanField(
        verbose_name=_('staff status'),
        default=False,
        help_text=_('Designates whether the user can log into this admin site.')
    )
    date_joined = models.DateTimeField(
        verbose_name=_('date joined'),
        default=timezone.now
    )
    is_email_verified = models.BooleanField(_('email_verified'), default=False)
    followers_count = models.PositiveIntegerField(default=0, editable=False)
    following_count = models.PositiveIntegerField(default=0, editable=False)
    friends = models.ManyToManyField(
        'self',
        symmetrical=True,
        blank=True
    )
    friends_count = models.PositiveIntegerField(default=0, editable=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'handlename']

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def __str__(self):
        return self.username



# ==============================================================================================================================

class EmailVerificationToken(models.Model):
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name="verification_tokens",
    )
    token = models.CharField(max_length=36, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    def save(self, *args, **kwargs):
        if not self.token:
            self.token = str(uuid4())
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(hours=24)
        super().save(*args, **kwargs)

    def is_valid(self):
        try:
            expiration_valid = self.expires_at > timezone.now()
            email_not_verified = not self.user.is_email_verified
            is_valid = expiration_valid and email_not_verified
            logger.info(f"Token {self.token} validation: not expired = {expiration_valid}, not_verified = {email_not_verified}, valid = {is_valid}")
            return is_valid
        except Exception as e:
            logger.error(f"Error in is_valid for token {self.token} : {str(e)}")
            return False

    class Meta:
        verbose_name = _("email verification token")
        verbose_name_plural = _("email verification tokens")


# ========================================================== PASSWORD RESET TOKEN ===============================================================
class PasswordResetToken(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    def save(self, *args, **kwargs):
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(hours=1)
        super().save(*args, **kwargs)

    def is_expired(self):
        return timezone.now() > self.expires_at

    class Meta:
        db_table = 'password_reset_token'
        indexes = [
            models.Index(fields=["token"])
        ]

    