import "./reptiles.css"

const reptilesArray = [{
        nombre: "Lacerta agilis",
        src: "./imagenes/zauneidechse1.jpg"
    },{
        nombre: "Lycaenops",
        src: "./imagenes/lycaenops.jpg"
    },{
        nombre: "Bradysaurus",
        src: "./imagenes/bradysaurus.jpg"
    },{
        nombre: "Hylonomus",
        src: "./imagenes/hylonomus.jpg"
    },{
        nombre: "Gavialis gangeticus",
        src: "./imagenes/indianGharial.jpg"
    },{
        nombre: "Iguana iguana",
        src: "./imagenes/iguanaIguana.jpg"
    }]

export default function ReptilesMain(){
    return(
<>
  <div class="headerLinks">
  
</div>
<div class="header">
  <h1>Reptiles</h1>
</div>

<div class="gallery">
  <figure class="galleryItem">
      <img src="./imagenes/zauneidechse1.jpg" class="galleryImg" alt=""/>
      <figcaption>Lacerta agilis</figcaption>
  </figure>
  <figure class="galleryItem">
      <img src="./imagenes/lycaenops.jpg" class="galleryImg" alt=""/>
      <figcaption>Lycaenops</figcaption>
  </figure>
  <figure class="galleryItem">
      <img src="./imagenes/bradysaurus.jpg" class="galleryImg" alt=""/>
      <figcaption>Bradysaurus</figcaption>
  </figure>
  <figure class="galleryItem">
      <img src="./imagenes/hylonomus.jpg" class="galleryImg" alt=""/>
      <figcaption>Hylonomus</figcaption>
  </figure>
  <figure class="galleryItem">
      <img src="./imagenes/indianGharial.jpg" class="galleryImg" alt=""/>
      <figcaption>Gavialis gangeticus</figcaption>
  </figure>
  <figure class="galleryItem">
      <img src="./imagenes/iguanaIguana.jpg" class="galleryImg" alt=""/>
      <figcaption>Iguana iguana</figcaption>
  </figure>

  <div class="returnButton">
      <a href="index.html">Volver</a>
  </div>
</div>
</>
    )};