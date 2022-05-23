import './mamiferos.css'




export default function MamiferosMain() {
   
    return (
<>

    
        <br/>
        <div class="divGrande">
            <h1>Mamíferos</h1>
            <div class="card">
                <p>Osos</p>
                <img src="./img/img/oso.jpg" alt=""/>
            </div>
            <div class="card">
                <p>Tigre</p>
                <img src="./img/img/tigre.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Lobo</p>
                <img src="./img/img/lobo.jpg"alt=""/>
            </div>
            <br/>
            <div class="card">
                <p>Leon</p>
                <img src="./img/img/leon.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Koala</p>
                <img src="./img/img/koala.jpg"alt=""/>
            </div>
            <div class="card">
                <p>Gato</p>
                <img src="./img/img/Gato.jpg"alt=""/>
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