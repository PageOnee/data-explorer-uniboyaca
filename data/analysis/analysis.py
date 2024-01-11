import pandas as pd
import os
import json
from .load_data import LoadData
from .methods import Methods


## Todo : Realiza la automatización del analisis de datos 
class Analysis:
    
    def analysis_data(self):
                 
        # ** Ruta del directorio de los archivos excel
        directory = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(directory, 'resources/post/2020_2.xlsx')
        
        # ** Cargar datos
        load_df = LoadData()
        df = load_df.load_data(file_path)
        
        # ** Elimina columnas excedentes
        columns_delete = ['Nombre','JustificacionTiempoIngresoPost','JustificacionRecomendacion','Comentarios','ServiciosBienestarPostgrado','ServiciosAdicionalesPostgrado']
        df_count = df.drop(columns_delete, axis=1)
            
        # ** Realiza el conteo
        columns_to_count = df_count.columns[:10]
        data_dic = Methods.count_data(df_count, columns_to_count)
        
        # ** Convertir el DataFrame    
        data_response = json.dumps(data_dic, ensure_ascii=False, indent=2)
        print('JSON : ')
        print(data_response)
        
        return data_response