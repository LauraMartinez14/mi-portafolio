import foto from '../assets/img/foto.jpg'
import '../styles/info.css'
function Descripcion(){
    return(
        <>
<h1>Mi portafolio</h1>
<div className='info-conteiner'>

    <div >
       <img className='img-foto' src={foto} alt="foto de la persona" />
    </div>
        
    <div className='conteiner-descripcion'>   
            <h2>Acerca de mi</h2>  
            <p>Soy estudiante de ing de sistemas del area de QA con experiencia en herramientas como selenium, posman. En mi tiempo libre, me apasiona la robótica y los sistemas embebidos. Este hobby me ha enseñado a abordar los proyectos con una visión de sistema integral y a ser meticulosa en la depuración, habilidades que aplico directamente para garantizar la calidad y la robustez del software en cada ciclo de prueba</p>
    </div>
</div>

        </>
    )
}

export default Descripcion;