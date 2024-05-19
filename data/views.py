### Librerias de django
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from rest_framework import status

### Clases
from .analysis.analysis import Analysis


## Vista para las operaciones de la Api 'Data'
class AnalisysData:
     
        
    # Metodo : Reporte por periodo
    @api_view(['GET'])
    def report_period(request):
        
        # Obtener los parámetros de consulta
        level = request.query_params.get('level')
        interval = request.query_params.get('interval')
        lapse = request.query_params.get('lapse')
        category = request.query_params.get('category')
        item = request.query_params.get('item')
        item_data = request.query_params.get('item_data')
        
        if request.method == 'GET':
        
            data = Analysis().analysis_data(level, interval, lapse, category, item, item_data)
            return Response(data, status=status.HTTP_200_OK)

        
    # Metodo : Reporte historico
    @api_view(['GET'])
    def report_historical(request):
        
        if request.method == 'GET':
            
            data = Analysis().report_historical()
            return Response(data, status=status.HTTP_200_OK)
    
    
    # Metodo : Promedio de un dato
    @api_view(['GET'])
    def average_data(request):
        
        if request.method == 'GET':
            
            data = "Promedio"
            return Response(data, status=status.HTTP_200_OK)
        
    
    # Metodo : Moda de un dato
    @api_view(['GET'])
    def mode_data(request):
        
        if request.method == 'GET':
            
            data = "Moda"
            return Response(data, status=status.HTTP_200_OK)
        

    # Metodo : Items de datos - Opciones Filtro
    @api_view(['GET'])
    def item_filter(request):
        
        item = request.query_params.get('item')
         
        if request.method == 'GET':
            
            data = Analysis().items_filter(item)
            return Response(data, status=status.HTTP_200_OK)
        
    # Metodo : Items de datos - Opciones Filtro
    @api_view(['GET'])
    def data_dashboard(request):
         
        if request.method == 'GET':
            
            data = Analysis().data_dash()
            return Response(data, status=status.HTTP_200_OK)