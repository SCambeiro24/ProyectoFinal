from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoriaViewSet, LugarViewSet, ValoracionViewSet

router = DefaultRouter()
router.register(r'categorias', CategoriaViewSet, basename='categoria')
router.register(r'lugares', LugarViewSet, basename='lugar')
router.register(r'valoraciones', ValoracionViewSet, basename='valoracion')

urlpatterns = [
    path('', include(router.urls)),
]