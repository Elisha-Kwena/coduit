from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.InterestCategoryList.as_view(), name='category-list'),
    path('interests/', views.InterestsList.as_view(), name='interest-list'),
    path('me/interests/', views.UserInterestsView.as_view(), name='my-interests'),
    path('select-interests/', views.initial_interest_selection, name='select-interests'),
    path('me/interests/', views.save_user_interests, name='user-interests'),
    
]