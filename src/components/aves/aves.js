import './aves.css'
// import React from 'react';


export default function AvesMain() {
   
   return (
<>
<div class="menu">
            <p>Menu</p>
            <a class="colorLink" href="./aves.html">Aves</a>
            <a class="colorLink" href="./reptiles.html">Reptiles</a>
            <a class="colorLink" href="./mamiferos.html">Mamíferos</a>
            <a class="colorLink" href="./anfibios.html">Anfibios</a>
            <a class="colorLink" href="./peces.html">Peces</a>
        </div>
    
        <br/>
        <div class="divGrande">
            <h1>Aves</h1>
            <div class="card">
                <p>Canario</p>
                <img src="./imagenes/canario.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Pájaro Carpintero</p>
                <img src="./imagenes/carpintero.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Colibri</p>
                <img src="./imagenes/colibri.jpeg"alt=""/>
            </div>
            <br/>
            <div class="card">
                <p>Gaviota</p>
                <img src="./imagenes/gaviota.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Paloma</p>
                <img src="./imagenes/paloma.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Tucán</p>
                <img src="./imagenes/tucan.jpg"alt=""/>
            </div>
        </div>
        <br/>
        <br/>
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