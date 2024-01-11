import pandas as pd
import os
import json
from .load_data import LoadData
from .methods import Methods


## Todo - Realiza la automatización del analisis de datos : 
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
        
        # ** Cuenta el numero de columnas
        num_columns = len(df_count.columns)
        print ('Numero de Columnas es : ', num_columns)
        
        # ** Realiza el conteo de
        df_data = Methods.count_data(df_count,'Sede')
        print('DataFrame : ')
        print(df_data)
        
        # ** Convertir el DataFrame
        data_dic = df_data.to_dict()
        print('Diccionario : ')
        print(data_dic)
        
        data_response = json.dumps({'sede': data_dic}, indent=2)
        print('JSON : ')
        print(data_response)
        
        return data_response