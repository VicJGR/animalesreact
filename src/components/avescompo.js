import React from 'react';

const aves = (props) => {

    return (

            <div class="card">
                <p>{props.animal.nombre}</p>
                <img src={props.animal.src}/>
            </div>
           
    
    )
}

export default Animal