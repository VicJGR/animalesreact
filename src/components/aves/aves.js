import './aves.css'
import Animal from './../../Animal' 
import {Link} from "react-router-dom";

const avesArray = [
    {nombre: 'Canario',
    src: './img/img/canario.jpg'},

    {nombre: 'Pajaro Carpintero',
    src: './img/img/carpintero.jpg'},

    {nombre: 'Colibri',
    src: './img/img/colibri.jpeg'},

    {nombre: 'Gaviota',
    src: './img/img/gaviota.jpg'},

    {nombre: 'Paloma',
    src: './img/img/paloma.jpg'},

    {nombre: 'Tucán',
    src: './img/img/tucan.jpg'}
]

export default function AvesMain() {
   
    return (
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
                    <h1>Aves</h1>
                    {
                   avesArray.map((avesArray)=>{
                      return <Animal animal= {avesArray}/>
                    })}
                <footer>
                    <a class="volver" href="index.html">Volver</a>
                </footer>
                </>
            );
   }


// FUNCION ( O INTENTO DE FUNCION ) PARA PASAR LOS COMPONENTES HIJOS DE UN ARRAY AL COMPONENTE PADRE
//    const aves = (props) => {
   
//        return (
   
//                <div class="card">
//                    <p>{props.animal.nombre}</p>
//                    <img src={props.animal.src}/>
//                </div>
   
       
//        )
//    }
   
//    export default Animal



