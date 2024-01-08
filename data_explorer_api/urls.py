from django.contrib import admin
from django.urls import path,include


### Todo : Configuracion de las rutas generales
urlpatterns = [
    path('data-explorer/admin/', admin.site.urls),
    path('data-explorer/', include('users.urls'))
]
