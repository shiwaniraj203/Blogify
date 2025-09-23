from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_root, name='api-root'),  # Add this line
    path('auth/signup/', views.signup, name='signup'),
    path('auth/login/', views.login, name='login'),
    path('blogs/', views.BlogPostListCreateView.as_view(), name='blog-list-create'),
    path('blogs/<int:pk>/', views.BlogPostDetailView.as_view(), name='blog-detail'),
]