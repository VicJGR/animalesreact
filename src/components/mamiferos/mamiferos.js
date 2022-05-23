import './mamiferos.css'
import Animal from './../../Animal'




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