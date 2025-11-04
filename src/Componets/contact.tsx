import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../styles/contact.css'

function Contact(){
  const [mail, setMail] = useState<string>("");
  const[name,setName]=useState<string>("");
  const[phone, setPhone]=useState<number>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `El mail ingresado es: ${mail} 
      Nombre: ${name}
      Celular: ${phone}`
    );
   
  };


  const githubUrl = "https://github.com/LauraMartinez14";
  const linkedinUrl = "https://www.linkedin.com/in/laura-andrea-martinez-lopez-ab37b3206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <>
    <div className="contactContainer">
      <h2>Contactos</h2>
      <p>Interesado/a en mi experiencia con Jira, Postman o mis casos de estudio de testing. Déjame tus datos y mi respuesta será rápida</p>

      <form onSubmit={handleSubmit} className="container-form">
        <div className="inputContainer">
           <label>Nombre</label>
            <input type="text" 
            placeholder="nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            /> 
        </div>
        <div className="inputContainer">
            <label>Celular</label>
            <input type="number"
            placeholder="celular"
            value={phone || ''} // Usamos '' si phone es undefined para evitar warnings en el input
            onChange={(e) => setPhone(Number(e.target.value))} />
        </div>
        <div className="inputContainer">
            <label>Gmail</label>
            <input
            type="email"
            placeholder="Gmail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            />
        </div>

        <button type="submit">Enviar</button>
        
      </form>

      <h3>Encuentrame en:</h3>
        <div className="container-link">
          
            {/* GITHUB LINK */}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                    <FaGithub size={30} />
                    <p>GitHub</p>
                </div>
            </a>
            
            {/* LINKEDIN LINK */}
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                    <FaLinkedin size={30} />
                    <p>LinkedIn</p>
                </div>
            </a>
        </div>
        </div>
    </>
  );
}
export default Contact;