import pandas as pd
import unicodedata

class Methods:
    
    def count_data(df, column):
        df_data = df[column].value_counts()
        return df_data