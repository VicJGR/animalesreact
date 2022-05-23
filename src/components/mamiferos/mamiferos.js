import './mamiferos.css'
import Animal from './../../Animal'
import {Link} from "react-router-dom";



export default function MamiferosMain() {
    
    const mamiferosArray = [
       {
         nombre: 'Tigre',
         src: "./img/img/tigre.jpg"
       },
       {
        nombre: 'Lobo',
        src: "./img/img/lobo.jpg"
      },
      {
        nombre: 'Leon',
        src: "./img/imgleon.jpg"
      },
      {
        nombre: 'Oso',
        src: "./img/img/leon.jpg"
      },
      {
        nombre: 'Koala',
        src: "./img/img/leon.jpg"
      },
      {
        nombre: 'Gato',
        src: "./img/img/leon.jpg"
      }  ]

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
            <h1>Mamíferos</h1>
            {
            mamiferosArray.map((mamiferosArray)=>{
              return <Animal animal= {mamiferosArray}/>
            })}
        <footer>
            <a class="volver" href="index.html">Volver</a>
        </footer>
        </>
    );
}