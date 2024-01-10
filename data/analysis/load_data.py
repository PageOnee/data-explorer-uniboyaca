import pandas as pd
import unicodedata 

## Todo : Cargar los datos de los archivos excel en dataframes
class LoadData:
    
    def load_data(route):
        
        try :
                
            print('Cargado archivo de la ruta : ', route)
            df = pd.read_excel(route)
            
            df = df.fillna('no-responde')
            
            # ** Normaliza el texto - (Minusculas)
            for column in df.columns:
                df[column] = df[column].apply(lambda x:x.lower() if isinstance(x, str) else x)  
            
            # **  Nomaliza el texto - (Omitir acentuacion)
            for column in df.columns:
                df[column] = df[column].apply(lambda x: unicodedata(x) if isinstance(x, str) else x)
                
            return df
          
        except FileNotFoundError as e:
            
            print('Error : El archivo no se ha encontrado')
            return None