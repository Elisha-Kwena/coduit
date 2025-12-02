# interests/serializers.py
from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from .models import InterestCategory, InterestModel, UserInterests


class InterestCategorySerializer(serializers.ModelSerializer):
    interests_count = serializers.SerializerMethodField()

    class Meta:
        model = InterestCategory
        fields = [
            'id', 'name', 'slug', 'description', 'is_active',
            'date_created', 'updated_at', 'interests_count'
        ]
        read_only_fields = ['slug', 'date_created', 'updated_at', 'interests_count']

    def get_interests_count(self, obj):
        return obj.interests.count()


class InterestSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)

    class Meta:
        model = InterestModel
        fields = [
            'id', 'interest', 'slug', 'category', 'category_name',
            'category_slug', 'is_popular', 'created_at', 'updated_at'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at']


class UserInterestSerializer(serializers.ModelSerializer):
    interest = InterestSerializer(many=True, read_only=True)
    interest_ids = serializers.ListField(
        child=serializers.IntegerField(min_value=1),
        write_only=True,
        required=False,
        help_text=_("List of interest IDs to assign to the user")
    )

    class Meta:
        model = UserInterests
        fields = ['id', 'user', 'interest', 'interest_ids', 'created_at', 'updated_at']
        read_only_fields = ['user', 'created_at', 'updated_at']

    def create(self, validated_data):
        interest_ids = validated_data.pop('interest_ids', [])
        user_interests, _ = UserInterests.objects.get_or_create(user=validated_data['user'])
        if interest_ids:
            interests = InterestModel.objects.filter(id__in=interest_ids)
            user_interests.interest.set(interests)
        return user_interests

    def update(self, instance, validated_data):
        interest_ids = validated_data.pop('interest_ids', None)
        if interest_ids is not None:
            interests = InterestModel.objects.filter(id__in=interest_ids)
            instance.interest.set(interests)
        return instance


class InterestSelectionSerializer(serializers.Serializer):
    interest_ids = serializers.ListField(
        child=serializers.IntegerField(min_value=1),
        min_length=1,
        help_text=_("Select at least one interest")
    )

    def validate_interest_ids(self, value):
        # Remove duplicates
        seen = set()
        dupes = [x for x in value if x in seen or seen.add(x)]
        if dupes:
            raise serializers.ValidationError(_("Duplicate interests are not allowed."))

        # Check existence
        if InterestModel.objects.filter(id__in=value).count() != len(value):
            raise serializers.ValidationError(_("One or more selected interests do not exist."))

        return value

