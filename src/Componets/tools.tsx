import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiMiro } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";
import '../styles/tools.css'

function Tools(){
return<>
<h2>Herramientas</h2>
<div className="conteiner-tools">
    
    <div>
        <FaGithub />
        <p>gitHub</p>
    </div>
     <div>
        <SiPostman />
        <p>Posman</p>
    </div>
     <div>
        <SiJira />
        <p>Jira</p>
    </div>
     <div>
        <SiMiro />
        <p>Miro</p>
    </div>
     <div>
        <FaTrello />
        <p>Trello</p>
    </div>
     <div>
        <SiSelenium />
        <p>Selenium</p>
    </div>
    <div>
        <SiMysql />
        <p>MySql</p>
    </div>
    <div>
        <TiVendorMicrosoft />
        <p>MicrosoftOffice</p>
    </div>
</div>
</>
}
export default Tools;