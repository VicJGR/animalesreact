import './mamiferos.css'




export default function MamiferosMain() {
    
    const mamiferosArray = [
       {
         nombre: 'Tigre',
         src: "imagenes/tigre.jpg"
       },
       {
        nombre: 'Lobo',
        src: "imagenes/lobo.jpg"
      },
      {
        nombre: 'Leon',
        src: "imagenes/leon.jpg"
      },
      {
        nombre: 'Oso',
        src: "imagenes/leon.jpg"
      },
      {
        nombre: 'Koala',
        src: "imagenes/leon.jpg"
      },
      {
        nombre: 'Gato',
        src: "imagenes/leon.jpg"
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