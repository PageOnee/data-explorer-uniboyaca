from django.urls import path
from .views import DataView


## Todo : Urls de la app 'Data'
urlpatterns = [
    path('api/data/', DataView.as_view()),
]
