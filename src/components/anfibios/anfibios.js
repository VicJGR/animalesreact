import "./anfibios.css"
import {Link} from "react-router-dom";


export default function AnfibiosMain(){
    return(
<>
<nav>
        <Link to ="/mamiferos" >Mamiferos</Link>|{" "}
        <Link to ="/aves">Aves</Link>|{" "}
        <Link to ="/anfibios">Anfibios</Link>|{" "}
        <Link to ="/peces">Peces</Link>|{" "}
        <Link to ="/reptiles">Reptiles</Link>|{" "}
        </nav>

<br/>
    <div>
        <h1>Anfibios</h1>
        <div>
            <p>Rana</p>
            <img src="./public/img/img/rana.jpg"alt=""/>
        </div>
        <div>
            <p>Sapo</p>
            <img src="./public/img/img/bufo_bufo_03.jpg"alt=""/>
        </div>
        <div>
            <p>Axolote</p>
            <img src="./public/img/img/axolote_02.jpg"alt=""/>
        </div>
        <br/>
        <div>
            <p>Cecilia</p>
            <img src="./public/img/img/cecilia.jpg"alt=""/>
        </div>
        <div>
            <p>Salamandra</p>
            <img src="./public/img/img/salamandra.jpg"alt=""/>
        </div>
        <div>
            <p>Tritón</p>
            <img src="./public/img/img/tritón.jpg"alt=""/>
        </div>
    </div>
    <footer>
                <Link to ="/" >Volver</Link>|{" "}
    </footer>
    
</>
    )};