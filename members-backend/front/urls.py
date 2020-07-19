from django.contrib import admin
from rest_framework import routers
from django.urls import path, include
from core.views import MemberViewSet

router = routers.DefaultRouter()
router.register(r'members', MemberViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
]
