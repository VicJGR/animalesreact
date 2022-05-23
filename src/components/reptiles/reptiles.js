import "./reptiles.css"
import Animal from "./../../Animal";
import {Link} from "react-router-dom";

const reptilesArray = [{
        nombre: "Lacerta agilis",
        src: "./img/img/zauneidechse1.jpg"
    },{
        nombre: "Lycaenops",
        src: "./img/img/lycaenops.jpg"
    },{
        nombre: "Bradysaurus",
        src: "./img/img/bradysaurus.jpg"
    },{
        nombre: "Hylonomus",
        src: "./img/img/hylonomus.jpg"
    },{
        nombre: "Gavialis gangeticus",
        src: "./img/img/indianGharial.jpg"
    },{
        nombre: "Iguana iguana",
        src: "./img/img/iguanaIguana.jpg"
    }]

export default function ReptilesMain(){
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
        <div class="divGrande"/>
            <h1>Reptiles</h1>
            {
            reptilesArray.map((reptilesArray)=>{
              return <Animal animal= {reptilesArray}/>
            })}
        <footer>
        <Link to ="/" >Volver</Link>|{" "}
        </footer>
</>
    )};