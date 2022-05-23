import './mamiferos.css'




export default function MamiferosMain() {
    
    const mamiferosArray = [
       {
         nombre: 'Tigre',
         src: "./public/img/img/tigre.jpg"
       },
       {
        nombre: 'Lobo',
        src: "./public/img/img/lobo.jpg"
      },
      {
        nombre: 'Leon',
        src: "./public/img/imgleon.jpg"
      },
      {
        nombre: 'Oso',
        src: "./public/img/img/leon.jpg"
      },
      {
        nombre: 'Koala',
        src: "./public/img/img/leon.jpg"
      },
      {
        nombre: 'Gato',
        src: "./public/img/img/leon.jpg"
      }  ]

return (
<>

    
        <br/>
        <div class="divGrande"/>
            <h1>Mamíferos</h1>
            {
            mamiferosArray.map((mamiferosArray)=>{
              return <Mamiferos mamiferos= {mamiferosArray}/>
            })}
        <footer>
            <a class="volver" href="index.html">Volver</a>
        </footer>
        </>
    );
}