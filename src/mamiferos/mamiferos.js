import './mamiferos.css'




function App() {
   
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
            <h1>Mamíferos</h1>
            <div class="card">
                <p>Osos</p>
                <img src="./imagenes/oso.jpg"/>
            </div>
            <div class="card">
                <p>Tigre</p>
                <img src="./imagenes/tigre.jpg"/>
            </div>
            <div class="card">
                <p>Lobo</p>
                <img src="./imagenes/lobo.jpg"/>
            </div>
            <br/>
            <div class="card">
                <p>Leon</p>
                <img src="./imagenes/leon.jpg"/>
            </div>
            <div class="card">
                <p>Koala</p>
                <img src="./imagenes/koala.jpg"/>
            </div>
            <div class="card">
                <p>Gato</p>
                <img src="./imagenes/Gato.jpg"/>
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