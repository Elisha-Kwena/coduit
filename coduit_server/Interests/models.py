from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _

User = get_user_model()


class InterestCategory(models.Model):
    name = models.CharField(
        _('category name'),
        max_length=255,
        unique=True,
        help_text=_('Name of the interest category'),
    )
    slug = models.SlugField(
        _('slug'),
        max_length=100,
        unique=True,
        blank=True,
        help_text=_('URL-friendly version of the category name'),
    )
    description = models.TextField(
        _('description'),
        blank=True,
        null=True,
        help_text=_('Brief description of the category'),
    )
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_('Whether this category is visible'),
    )
    date_created = models.DateTimeField(_('date created'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    class Meta:
        verbose_name = _('interest category')
        verbose_name_plural = _('interest categories')
        ordering = ['name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)[:100]
        super().save(*args, **kwargs)


class InterestModel(models.Model):
    interest = models.CharField(
        _('interest name'),
        max_length=100,
        db_index=True,
        help_text=_('Name of the interest (e.g., Python, React)'),
    )
    slug = models.SlugField(
        _('slug'),
        max_length=200,
        unique=True,
        blank=True,
        help_text=_('Unique URL-friendly identifier'),
    )
    category = models.ForeignKey(
        InterestCategory,
        on_delete=models.CASCADE,
        related_name='interests',  # → category.interests.all()
        verbose_name=_('category'),
    )
    is_popular = models.BooleanField(
        _('popular'),
        default=False,
        db_index=True,
        help_text=_('Highlight this interest in UI'),
    )
    created_at = models.DateTimeField(_('created at'), default=timezone.now)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    class Meta:
        verbose_name = _('interest')
        verbose_name_plural = _('interests')
        ordering = ['interest']
        unique_together = ('interest', 'category')
        indexes = [
            models.Index(fields=['interest']),
            models.Index(fields=['category']),
            models.Index(fields=['is_popular']),
            models.Index(fields=['-created_at']),
        ]

    def __str__(self):
        return self.interest

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.interest)
            slug = base_slug
            counter = 1
            while InterestModel.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)


class UserInterests(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='user_interests',  # → user.user_interests
        verbose_name=_('user'),
    )
    interest = models.ManyToManyField(
        InterestModel,
        related_name='selected_by_users',  # → interest.selected_by_users.all()
        blank=True,
        verbose_name=_('interests'),
    )
    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    class Meta:
        verbose_name = _('user interests')
        verbose_name_plural = _('user interests')

    def __str__(self):
        count = self.interest.count()
        return f"{self.user.get_username()} has {count} interest(s)"

    # Helper methods
    def set_interests(self, interest_ids):
        interests = InterestModel.objects.filter(id__in=interest_ids)
        self.interest.set(interests)

    def add_interests(self, interest_ids):
        interests = InterestModel.objects.filter(id__in=interest_ids)
        self.interest.add(*interests)