import './aves.css'
// import React from 'react';


export default function AvesMain() {
   
   return (
<>
    
       
        <div class="divGrande">
            <h1>Aves</h1>
            <div class="card">
                <p>Canario</p>
                <img src="./public/img/img/canario.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Pájaro Carpintero</p>
                <img src="./public/img/img/carpintero.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Colibri</p>
                <img src="./public/img/img/colibri.jpeg"alt=""/>
            </div>
            <br/>
            <div class="card">
                <p>Gaviota</p>
                <img src="./public/img/img/gaviota.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Paloma</p>
                <img src="./public/img/img/paloma.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Tucán</p>
                <img src="./public/img/img/tucan.jpg"alt=""/>
            </div>
        </div>
        
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