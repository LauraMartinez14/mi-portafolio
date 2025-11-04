import { useState } from "react";
import type { Proyect } from "../types/Proyect";
import '../styles/card.css'
function Card(){
     const [Proyects] = useState<Proyect[]>([{
            titulo: "Shop Barrio: Plataforma E-commerce",
            descripcion: "Plataforma e-commerce académica (Web/Mobile) para el comercio local. Mi contribución se centró en aplicar un proceso de QA estructurado. Diseñé 70-90 Casos de Prueba (TCs) usando técnicas como Partición de Equivalencia y ejecuté pruebas funcionales exhaustivas en módulos críticos (Checkout y Registro). Para la gestión de defectos, utilicé Jira, y aplique la metodologia de scrum.",
            dia: new Date("2023-03-03")
        }, {
            titulo: "Sabor Andino: Plataforma Digital de Recetas",
            descripcion: "Plataforma web y móvil de gastronomía boliviana. Trabajé como parte del equipo de QA en un entorno Scrum/Agile. Mi rol se enfocó principalmente en las pruebas de UI/UX y la calidad del contenido multimedia. Gestioné y di seguimiento a más de 80 defectos en Trello, enfocados en la validación de archivos críticos como la carga de imágenes, PDFs, audios y videos. Aseguré la usabilidad y la correcta visualización de las recetas en diferentes dispositivos.",
            dia: new Date("2023-10-08")
        }, {
            titulo: "UMSS ICPC: Sistema de Gestión de competencia ICPC",
            descripcion: "Sistema integral para el registro y gestión de concursos académicos (inscripción, equipos, rondas y resultados). Bajo la metodología Scrum, fui el único responsable de QA, planificando y ejecutando las pruebas de principio a fin. Lideré el diseño y la ejecución de 120-150 Casos de Prueba (TCs) en módulos clave. El punto principal fue la implementación de Pruebas de Carga (Load Testing) para identificar cuellos de botella y asegurar que el sistema pudiera manejar picos de concurrencia durante las inscripciones.",
            dia: new Date("2024-03-09")
        }])
return<>
    <div>
        <h2>Proyectos</h2>
        <p>En esta seccion encontraras algunos de los proyectos QA en los que estuve involugrada</p>
    </div>
<div className='card-columna'>
            {
                Proyects.map((item, index) => ((
                    <div key={index}  className='div-card-columna'>
                        <h2>{item.titulo}</h2>
                        <p>{item.descripcion}</p>
                        <p>{item.dia.toISOString().split('T')[0]}</p>
                    </div>
                )))
            }
        </div>
</>
}
export default Card;