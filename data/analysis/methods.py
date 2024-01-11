import pandas as pd
import unicodedata


## Todo - Metodos utilizados para realizar el Analisis de Datos :
class Methods:
    
    # ** Metodo de conteo de cantidades :
    def count_data(df, column):
        df_data = df[column].value_counts()
        return df_data