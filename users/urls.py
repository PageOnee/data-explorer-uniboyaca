from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from users import views


### Todo : Definicion de las rutas de la API 'Usuarios'
router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'users')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title='API Users'))
]
