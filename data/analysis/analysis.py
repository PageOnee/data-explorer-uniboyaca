### Clases
from .report_period.analysis_post import AnalysisPost
from .report_period.analysis_under import AnalysisUnder
from .report_historical.analysis_under import AnalysisUnderHistorical
from .core.items_filtered import ItemsFiltered
from .report_home.analysis_home import Analysis_Home

## Clase de enrutacion 
class Analysis:
    
    
    # Metodo : Reporte por periodo
    def analysis_data(self, level, interval, lapse, category, item, item_data):
        
        if(level == 'Pregrado'):
            
            print('Analisis - Datos - Pregrado')
            data = AnalysisUnder().analysis_data_under(interval, lapse, category, item, item_data)
            
        elif(level == 'Posgrado'):
            
            print('Analisis - Datos - Posgrado')
            data = AnalysisPost().analysis_data_post(interval, lapse, category, item, item_data)
            
        return data
    
    
    # Metodo : Reporte Historico
    def report_historical(self):
        
        data = AnalysisUnderHistorical().report_historic()
        
        return data
    
    
    # Metodo : Traer items del valor filtrado
    def items_filter(self, item):
        
        data = ItemsFiltered.item_filtered(item)
        return data
    
    def data_dash(self):
        data = Analysis_Home.getInfoDash(self)
        return data