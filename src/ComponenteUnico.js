export default function Animal(props){
    return (
       <div class="card">
            <p>{props.animal.nombre}</p>
            <img src={props.animal.src}alt=""/>
        </div>
    )}
       