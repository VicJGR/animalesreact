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
        src: "./img/img/leon.jpg"
      },
      {
        nombre: 'Oso',
        src: "./img/img/oso.jpg"
      },
      {
        nombre: 'Koala',
        src: "./img/img/koala.jpg"
      },
      {
        nombre: 'Gato',
        src: "./img/img/Gato.jpg"
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
        <Link to ="/" >Volver</Link>|{" "}
        </footer>
        </>
    );
}