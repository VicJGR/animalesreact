import "./peces.css"
import {Link} from "react-router-dom";

export default function PecesMain(){
    return(
<>
<nav>
        <Link to ="/mamiferos" >Mamiferos</Link>|{" "}
        <Link to ="/aves">Aves</Link>|{" "}
        <Link to ="/anfibios">Anfibios</Link>|{" "}
        <Link to ="/peces">Peces</Link>|{" "}
        <Link to ="/reptiles">Reptiles</Link>|{" "}
        </nav>
    <div class="align"/>
    
<br/>    
<div>
    <h1>Peces</h1>
</div>
<div>
    <p>Salmón</p>
    <img class="image-div" src="./public/img/img/salmon.jfif"alt=""/>
</div>
<div>
    <p>Atún</p>
    <img class="image-div" src="./public/img/img/atun.jfif"alt=""/>
</div>
<div>
    <p> Trucha  </p>
    <img class="image-div" src="./public/img/img/trucha.jfif"alt=""/>
</div>
<br/>
<div>
    <p>Piraña  </p>
    <img class="image-div" src="./public/img/img/piraña.jfif"alt=""/>
</div>
<div>
    <p> Bagre  </p>
    <img class="image-div" src="./public/img/img/bagre.jfif"alt=""/>   
</div>
<div>
    <p> Dorada  </p>
    <img class="image-div" src="./public/img/img/dorada.jfif" alt=""/> 
</div>
<br/>
<br/>
<footer>
<Link to ="/" >Volver</Link>|{" "}
</footer>
</>
    )};
    