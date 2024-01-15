from django.urls import path
from .views import DataView


### Todo : Urls de la app 'Data'
urlpatterns = [
    path('api/data/<str:level>/<str:interval>/<str:lapse>/<str:category>', DataView.as_view())
]
