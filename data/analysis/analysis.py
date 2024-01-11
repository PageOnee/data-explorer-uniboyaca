import pandas as pd
import os
from .load_data import LoadData
from .methods import Methods
import json

class Analysis:
    
    def analysis_data(self):
        
        #print('Anaysis : Inicio Analisis : ')
        
        load_df = LoadData()
        current_directory = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(current_directory, 'resources/post/2020_2.xlsx')
        #print(file_path)
        df = load_df.load_data(file_path)
        
        columns_delete = ['Nombre','JustificacionTiempoIngresoPost','JustificacionRecomendacion','Comentarios','ServiciosBienestarPostgrado','ServiciosAdicionalesPostgrado']
        df_count = df.drop(columns_delete, axis=1)
        
        # ** Contar Columnas
        num_columns = len(df_count.columns)
        print ('Numero de Columnas es : ', num_columns)
        
        # **
        df_data = Methods.count_data(df_count,'Sede')
        print(df_data)
        
        # ** Convetir
        data_share =pd.Series(df_data)
        
        # print('Series')
        #  print(data_share)
        data_dic = data_share.to_dict()
        
        # print(data_dic)
        data_json = json.dumps(data_dic, indent=2)
        
        return data_json