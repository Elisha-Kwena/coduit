# interests/admin.py
from django.contrib import admin, messages
from django.utils.text import slugify
from django.utils.html import format_html
from django.urls import reverse
from django.utils.http import urlencode
from django.db import models

from .models import InterestCategory, InterestModel, UserInterests


@admin.register(InterestCategory)
class InterestCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'interests_count', 'is_active', 'date_created']
    list_filter = ['is_active', 'date_created']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ['date_created', 'updated_at']

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(models.Count('interests'))

    def interests_count(self, obj):
        count = obj.interests.count()
        url = reverse("admin:interests_interestmodel_changelist") + "?" + urlencode({"category__id__exact": obj.id})
        return format_html('<a href="{}">{} Interests</a>', url, count)
    interests_count.short_description = "Interests"
    interests_count.admin_order_field = 'interests__count'


@admin.register(InterestModel)
class InterestModelAdmin(admin.ModelAdmin):
    list_display = ['interest', 'category_link', 'slug', 'is_popular', 'created_at']
    list_filter = ['category', 'is_popular', 'created_at']
    search_fields = ['interest', 'category__name']
    prepopulated_fields = {'slug': ('interest',)}
    readonly_fields = ['created_at', 'updated_at']
    list_per_page = 50

    def get_queryset(self, request):
        return super().get_queryset(request).select_related('category')

    def category_link(self, obj):
        if not obj.category:
            return "—"
        url = reverse("admin:interests_interestcategory_change", args=[obj.category.id])
        return format_html('<a href="{}">{}</a>', url, obj.category.name)
    category_link.short_description = "Category"
    category_link.admin_order_field = 'category__name'

    def save_model(self, request, obj, form, change):
        if not obj.slug:
            base = slugify(obj.interest)
            slug = base
            i = 1
            while InterestModel.objects.filter(slug=slug).exclude(pk=obj.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            obj.slug = slug
        super().save_model(request, obj, form, change)


@admin.register(UserInterests)
class UserInterestsAdmin(admin.ModelAdmin):
    list_display = ['user_link', 'interests_count', 'created_at']
    search_fields = ['user__username', 'user__email']
    readonly_fields = ['created_at', 'updated_at']
    filter_horizontal = ['interest']

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('interest')

    def user_link(self, obj):
        url = reverse("admin:auth_user_change", args=[obj.user.id])
        return format_html(
            '<a href="{}"><strong>{}</strong></a><br><small>{}</small>',
            url, obj.user.get_username(), obj.user.email
        )
    user_link.short_description = "User"

    def interests_count(self, obj):
        count = obj.interest.count()
        url = reverse("admin:interests_interestmodel_changelist") + "?" + urlencode({
            "selected_by_users__id__exact": obj.id
        })
        return format_html('<a href="{}">{} interest(s)</a>', url, count)
    interests_count.short_description = "Interests"

    @admin.action(description="Clear selected users' interests")
    def clear_interests(self, request, queryset):
        cleared = 0
        for profile in queryset:
            profile.interest.clear()
            cleared += 1
        self.message_user(request, f"Cleared interests for {cleared} user(s).", messages.SUCCESS)

    actions = [clear_interests]