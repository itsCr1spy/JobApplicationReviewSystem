
from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
		path('overview',views.overview,name='overview'),
		path('candidate-list/', views.candidateList, name="candidate-list"),
		path('candidate-detail/<str:pk>/', views.candidateDetail, name="candidate-detail"),
		path('candidate-add/', views.candidateAdd, name="candidate-add"),
		path('candidate-update/<str:pk>/', views.candidateUpdate, name="candidate-update"),
		path('', views.getRoutes)
]