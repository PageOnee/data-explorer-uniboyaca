import os
import json
from .load_data import LoadData
from .methods import Methods


### Todo : Realiza la automatización del analisis de datos 
class Analysis:

  ## ? Funcion : Carga las rutas de los archivos del Banco de Datos
  def __init__(self):
    
    # ** Paths rutas Pregrado
    self.files_paths_under = {
      '2022_2': 'resources/under/2022_2.xlsx',
    }
    
    # ** Paths rutass Posgrado
    self.files_paths_post  = {
      '2020_2': 'resources/post/2020_2.xlsx',
      '2021_1': 'resources/post/2021_1.xlsx',
    }
      
  def analysis_data(self):
                 
    # ** Ruta del directorio de los archivos excel
    directory = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(directory, self.files_paths_post['2020_2'])
        
    # ** Cargar datos
    load_df = LoadData()
    df = load_df.load_data(file_path)
        
    # ** Elimina columnas excedentes
    columns_delete = ['Nombre','JustificacionTiempoIngresoPost','JustificacionRecomendacion','Comentarios','ServiciosBienestarPostgrado','ServiciosAdicionalesPostgrado']
    df_count = df.drop(columns_delete, axis=1)
            
    # ** Realiza el conteo
    columns_to_count = df_count.columns[:8]
    data_dic = Methods.count_data(df_count, columns_to_count)
    print('Diccionario : ')
    print(data_dic)
        
    # ** Convertir el DataFrame    
    data_response = json.dumps(data_dic, ensure_ascii=False, indent=2)
    result = []

    # Iterar sobre las secciones y sus datos
    for section, section_data in data_dic.items():
      chart_data = [{'name': name, 'visit': value} for name, value in section_data.items()]
      result.append({'title': section, 'dataKey': section, 'chartData': chart_data})

    # Convertir a JSON
    json_result = json.dumps(result, indent=2)
    #print('JSON : ')
    #print(json_result)
        
    return json_result