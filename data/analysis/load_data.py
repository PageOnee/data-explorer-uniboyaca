import pandas as pd
import unidecode


## Todo : Carga los datos de los archivos excel en dataframes  
class LoadData:
    
    ## ? Funcion : Carga el archivo excel de Pregrado
    def load_data_under(self, route):
        
        try :
                    
            print('Cargado archivo de la ruta : ', route)
            df = pd.read_excel(route)
            
            df = df.fillna('no-responde')
            
            # * Normaliza el texto - (Minusculas)
            for column in df.columns:
                df[column] = df[column].apply(lambda x:x.lower() if isinstance(x, str) else x)  
            
            # *  Nomaliza el texto - (Omitir acentuacion)
            for column in df.columns:
                df[column] = df[column].apply(lambda x: unidecode.unidecode(x) if isinstance(x, str) else x)
        
            #* Elimina columnas excedentes
            columns_delete = ['MarcaTemporal','NombreCompleto','Codigo','Sugerencias','JustificacionRecomendacion']
            df = df.drop(columns_delete, axis=1)
            
            print('Exito : Archivo cargado exitosamente')
            return df
          
        except FileNotFoundError as e:
            
            print('Error : El archivo no se ha encontrado en la ruta especificada')
            return None
    
    
    ## ? Funcion : Carga el archivo excel de Posgrado
    def load_data(self, route):
        
        try :
                    
            print('Cargado archivo de la ruta : ', route)
            df = pd.read_excel(route)
            
            df = df.fillna('no-responde')
            
            # ** Normaliza el texto - (Minusculas)
            for column in df.columns:
                df[column] = df[column].apply(lambda x:x.lower() if isinstance(x, str) else x)  
            
            # **  Nomaliza el texto - (Omitir acentuacion)
            for column in df.columns:
                df[column] = df[column].apply(lambda x: unidecode.unidecode(x) if isinstance(x, str) else x)
        
            print('Exito : Archivo cargado exitosamente')
            return df
          
        except FileNotFoundError as e:
            
            print('Error : El archivo no se ha encontrado en la ruta especificada')
            return None
    
   