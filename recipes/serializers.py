from rest_framework import serializers

from .models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'code', 'fullname', 'description', 'img_scr']


class RecipeSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.fullname')
    class Meta:
        model = Recipe
        fields = ['id', 'fullname', 'description', 'img_scr', 'category', 'content', 'likes', 'category_name']