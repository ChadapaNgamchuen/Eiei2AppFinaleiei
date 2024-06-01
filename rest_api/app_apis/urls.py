# app_apis/urls.py
from django.urls import path
from . import views
urlpatterns = [
   path('', views.ListData.as_view()),
   path('<int:pk>/', views.Detail.as_view()),
]
