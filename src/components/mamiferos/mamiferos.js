import './mamiferos.css'




export default function MamiferosMain() {
   
    return (
<>

    
        <br/>
        <div class="divGrande">
            <h1>Mamíferos</h1>
            <div class="card">
                <p>Osos</p>
                <img src="./imagenes/oso.jpg" alt=""/>
            </div>
            <div class="card">
                <p>Tigre</p>
                <img src="./imagenes/tigre.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Lobo</p>
                <img src="./imagenes/lobo.jpg"alt=""/>
            </div>
            <br/>
            <div class="card">
                <p>Leon</p>
                <img src="./imagenes/leon.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Koala</p>
                <img src="./imagenes/koala.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Gato</p>
                <img src="./imagenes/Gato.jpg"alt=""/>
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