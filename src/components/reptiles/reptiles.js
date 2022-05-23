import "./reptiles.css"
import Animal from "./../../Animal";

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
<br/>
        <div class="divGrande"/>
            <h1>Reptiles</h1>
            {
            reptilesArray.map((reptilesArray)=>{
              return <Animal animal= {reptilesArray}/>
            })}
        <footer>
            <a class="volver" href="index.html">Volver</a>
        </footer>
</>
    )};