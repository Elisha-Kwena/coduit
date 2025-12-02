# interests/urls.py
from django.urls import path
from . import views

app_name = 'interests'

urlpatterns = [
    # 1. Public: List all active categories (with interest count)
    path(
        'categories/',
        views.InterestCatgoryList.as_view(),
        name='category-list'
    ),

    # 2. Public: List interests — with optional filters
    # Examples:
    #   GET /interests/                    → all interests
    #   GET /interests/?category_id=5       → interests in category 5
    #   GET /interests/?popular=true        → only popular ones
    #   GET /interests/?category_id=3&popular=true
    path(
        'interests/',
        views.InterestList.as_view(),
        name='interest-list'
    ),

    # 3. Authenticated: Get or update current user's interests (profile editing)
    # GET  → see your interests
    # PATCH → update (replace) your interests
    path(
        'me/interests/',
        views.UserInterestsListView.as_view(),
        name='my-interests'
    ),

    # 4. Authenticated: Onboarding — first-time interest selection
    # POST → save selected interests during signup/welcome flow
    path(
        'onboarding/select-interests/',
        views.SelectInitialInterestsView.as_view(),
        name='select-initial-interests'
    ),
]