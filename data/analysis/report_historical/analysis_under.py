### Librerias de Python
import os
from collections import defaultdict
import pandas as pd

### Clases
from ..core.load_data import LoadData
from ..core.methods import Methods
from ..core.paths import Paths
from ..core.items import Items


## Clase Analisis historico
class AnalysisUnderHistorical:
  
  
    # Metodo analisis historico
    def report_historic(self):
        
        # Path de los archivos
        files_path = Paths.path_under()
        
        # Obtener el directorio actual del script
        directory = os.path.dirname(os.path.abspath(__file__))
        parent_directory = os.path.dirname(directory)
        
        results = defaultdict(dict)  # Usamos defaultdict para crear automáticamente diccionarios anidados
        
        for column_name, path in files_path.items():
            file_path = os.path.join(parent_directory, path)
            
            load_df = LoadData()
            df = load_df.load_data_under(file_path)
            
            data_dic = Methods.count_data_historic(df,Items.historico_prueba)
            
            # Agregar los datos al diccionario 'results'
            for key, value in data_dic.items():
                if key not in results:
                    results[key] = {}
                results[key][column_name] = value
        
        return results