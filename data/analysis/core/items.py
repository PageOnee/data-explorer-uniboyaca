### Clase Items DataFrames
class Items:
    
    ## Items Pregrado
    
    # Items categoria informacion personal
    informacion_personal =  ['ProgramaAcademico', 'Sede', 'DoblePrograma', 'SedeDoblePrograma','ProgramaDoblePrograma','Sexo','Edad','EstadoCivil','NumeroHijos','ConviveCon',
                        'PersonasACargo','CantidadPersonasCargoEconomicamente','EstratoSocioEconomico']
     
    # Items categoria informacion familiar   
    informacion_familiar = ["PadreVive", "MadreVive", "EstadoCivilPadres", "ConviveCon", "OcupacionPadre", "OcupacionMadre", "OcupacionConyuge", "OcupacionHermanoMayor",
                            "OcupacionHermanoMenor", "NivelEducativoPadre", "NivelEducativoMadre", "NivelEducativoConyuge", "NivelEducativoHermanoMayor", "NivelEducativoHermanoMenor"]

    # Items categoria estado socioeconomico
    estado_socioeconomico = ["IngresosPadre", "IngresosMadre", "IngresosConyuge", "IngresosPropios", "IngresosComplementarios", "RazonIngresosComplementarios", "GastosEducativos"]
    
    # Items categoria educacion previa
    educacion_previa = ['EdadConclusionBachillerato','TipoColegio','TituloBachillerato','JornadaBachillerato', 'ValidacionBachillerato', 'InstitucionBachilleratoBilingue','TiempoTituloBachillerato',
                        'InconclusionEstudiosPrevios','MotivoInconclusionEstudios','TiempoTranscurridoIngresoUniversidad','TituloPrevioUniversidad','TipoTituloPrevio','FactoresSeleccionCarrera',
                        'NivelIdiomaIngles', 'NivelIdiomaFrances','NivelIdiomaItaliano', 'NivelIdiomaAleman']
    
    # Items categoria contexto social y personal 
    datos_etnicos = ["PerteneceGrupoEtnico", "GrupoEtnico", "ComunidadLGBTI", "Discapacidad", "TipoDiscapacidad", "VictimaConflictoArmado"]

    # Items categoria estilo de vida y percepcion
    datos_actividades = ["PracticaDeporte", "Deporte", "GrupoCultural", "GrupoCulturalNombre", "CantidadLectura", "FrecuenciaFumar", "FrecuenciaBebidasAlcoholicas", "FrecuenciaSustanciasPsicoactivas"]
    
    # Items categoria percepcion
    percepcion = ['PercepcionEquiposMediosTecnlogicos', 'PercepcionCalidadDocentes', 'PercepcionPlanesEstudio','PercepcionServicioUsuario',
                'PercepcionProcesosPedagogicos','PercepcionSistemaEvaluacion','PercepcionImagenGeneral','SatisfaccionChatLinea','SatisfaccionFormularioPaginaWeb',
                'SatisfaccionWhatsapp','SatisfaccionMessenger','SatisfaccionCorreoElectronico','SatisfaccionPuntoAtenciónPresencial']
        
           
    ## Items Posgrado
    
    # Items categoria informacion personal
    informacion_personal_post = ["Nombre","ProgramaAcademico","AlternativaDeGrado","Sede","Semestre","Genero", "Edad","EstadoCivil","CantidadHijos","ConviveCon"]
    
    #Items Informacion familiar
    informacion_familiar_post = [ "OcupacionConyuge", "OcupacionPadre", "OcupacionMadre", "OcupacionHermanoMayor","OcupacionHermanoMenor","NivelEducativoConyuge","NivelEducativoPadre",
    "NivelEducativoMadre","NivelEducativoHermanoMayor","NivelEducativoHermanoMenor","PersonasACargo","CantidadPersonasACargo"]
    
    estado_socioeconomico_post = ["SituacionLaboral","SectorEconomicoLaboral","NombreEmpresa","EstratoSocioeconomico","NivelIngresosPropios","NivelIngresosConyuge","NivelIngresosPadre","NivelIngresosMadre"]

    # Items educacion previa post
    educacion_previa_post = ["UbicacionUniversidadPregrado","UniversidadPregrado","EdadCulminacionPregrado","TiempoPregrado","TiempoIngresoPostgrado","JustificacionTiempoIngresoPost",
    "NivelManejoIngles","SostenimientoEconomicoPregrado","TituloPostgradoPrevio","TipoTituloPostgradoPrevio","FactoresSeleccionPostgrado","EstudiosInconclusosOtraInstitucion",
    ]
    
    # Items datos etnicos 
    datos_etnicos_post = ["PertenenciaGrupoIndigena","NombreGrupoIndigena","PertenenciaGrupoLGTBI","TipoDiscapacidad","TipoDiscapacidadPresente","VictimaConflictoArmado"]
    
    # Items categoria percepcion
    percepcion_post = ["ServiciosBienestarPostgrado","ServiciosAdicionalesPostgrado","DescrubrimientoUniversidad","EleccionUniversidad","CalificacionPublicidadUniversidad",
    "PercepcionEquiposTecnologicos","PercepcionInstalaciones","PercepcionCalidadDocentes","PercepcionPlanesDeEstudio","PercepcionServicioAlUsuario","PercepcionProcesoPedagogico",
    "PercepcionSistemaEvaluacionEstudiantil","PercepcionGeneralUniversidad","UniversidadConMejorInfraestructura","UniversidadConPeorInfraestructura","UniversidadConCalidadAcademicaAlta","UniversidadConCalidadAcademicaBaja",
    "UniversidadConPrecioMatriculaAlto","UniversidadConPrecioMatriculaBajo","UniversidadConMayorReconocimientoSociedad","UniversidadConMenorReconocimientoSociedad",
    "UniversidadConImagenPositiva","UniversidadConImagenNegativa","RecomendacionUniversidad","JustificacionRecomendacion","Comentarios"]
    
    
    ### Items Historico
    
    # Items Predeterminados
    historico_prueba = ['ProgramaAcademico', 'Sede', 'DoblePrograma', 'SedeDoblePrograma','ProgramaDoblePrograma','Sexo','Edad','EstadoCivil','NumeroHijos','ConviveCon',
                        'PersonasACargo','EstratoSocioEconomico',"NivelEducativoPadre", "NivelEducativoMadre", "NivelEducativoConyuge",
                        "NivelEducativoHermanoMayor", "NivelEducativoHermanoMenor","PerteneceGrupoEtnico", "GrupoEtnico", "ComunidadLGBTI", "Discapacidad", "TipoDiscapacidad", 
                        "VictimaConflictoArmado",'PercepcionEquiposMediosTecnlogicos', 'PercepcionCalidadDocentes', 'PercepcionPlanesEstudio','PercepcionServicioUsuario',
                'EdadConclusionBachillerato','TipoColegio','TituloBachillerato','JornadaBachillerato', 'ValidacionBachillerato', 'InstitucionBachilleratoBilingue','TiempoTituloBachillerato',
                        'InconclusionEstudiosPrevios','MotivoInconclusionEstudios','TiempoTranscurridoIngresoUniversidad','TituloPrevioUniversidad','TipoTituloPrevio','FactoresSeleccionCarrera',
                        'NivelIdiomaIngles', 'NivelIdiomaFrances','NivelIdiomaItaliano', 'NivelIdiomaAleman',
                        'PercepcionProcesosPedagogicos','PercepcionSistemaEvaluacion','PercepcionImagenGeneral','SatisfaccionChatLinea','SatisfaccionFormularioPaginaWeb',
                'SatisfaccionWhatsapp','SatisfaccionMessenger','SatisfaccionCorreoElectronico','SatisfaccionPuntoAtenciónPresencial']
