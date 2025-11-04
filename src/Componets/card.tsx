import { useState } from "react";
import type { Proyect } from "../types/Proyect";
import '../styles/card.css'
function Card(){
     const [Proyects] = useState<Proyect[]>([{
            titulo: "tarea1",
            descripcion: "descripcion tarea 1",
            dia: new Date("2025-10-07")
        }, {
            titulo: "tarea2",
            descripcion: "descripcion tarea 2",
            dia: new Date("2025-10-08")
        }, {
            titulo: "tarea3",
            descripcion: "descripcion tarea 3",
            dia: new Date("2025-10-09")
        }])
return<>
    <div>
        <h2>Proyectos</h2>
        <p>En esta seccion encontraras algunos de los proeyctos QA en los que estuve involugrada</p>
    </div>
<div className='card-columna'>
            {
                Proyects.map((item, index) => (
                    <div key={index}  className='div-card-columna'>
                        <h2>Titulo:{item.titulo}</h2>
                        <p>Descripcion: {item.descripcion}</p>
                        <p>fecha: {item.dia.toISOString()}</p>
                    </div>
                ))
            }
        </div>
</>
}
export default Card;