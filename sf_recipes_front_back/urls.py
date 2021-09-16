from django.contrib import admin
from django.urls import path, include

from recipes.urls import urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('recipes.urls'))
]
