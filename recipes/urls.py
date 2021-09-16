from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view

from .views import CategoryViewSet, RecipeViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('openapi', get_schema_view(
        title="Recipes Book",
        description="API for Recipes Book"
    ), name='openapi-schema'),
]
