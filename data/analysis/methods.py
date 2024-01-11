import pandas as pd
import unicodedata


## Todo : Metodos utilizados para realizar el Analisis de Datos
class Methods:
    
    # ** Metodo de conteo de cantidades :
    @staticmethod
    def count_data(df, columns):
        data_dict = {}
        
        for column in columns:
            df_data = df[column].value_counts().to_dict()
            data_dict[column] = df_data
        return data_dict
    