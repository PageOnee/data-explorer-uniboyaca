### Librerias de django
from django.urls import path

### Vista
from .views import AnalisysData


## Paths rutas de la Api de analisis de datos
urlpatterns = [
    
    # Ruta reporte por periodo
    path('api/v1/data/report_period', AnalisysData.report_period),
    
    # Ruta reporte historico
    path('api/v1/data/report_historical', AnalisysData.report_historical ),

    # Ruta promedio de un dato
    path('api/v1/data/average', AnalisysData.average_data),
    
    # Ruta moda de un dato
    path('api/v1/data/mode', AnalisysData.mode_data),
    
    # Ruta para traer los items de una columna
    path('api/v1/data/items-filter', AnalisysData.item_filter),
    
    path('api/v1/data/data-home', AnalisysData.data_dashboard)
    
]