import React, {Component} from 'react';

//Asignamos a los Props los parametros del Array que vamos a utilizar dentro de nuestro componente
const Imagen = (props) =>{
    const {likes,largeImageURL, previewURL,views, tags} = props.imagen;
    return(
        <div className="card">
            <img
                className="card-img-top"    
                src={previewURL}
                alt={tags} 
            />
            <div className="card-body">
            <p className="card-text">
                <span>{views} Vistas </span>
                <span>{likes} Likes</span>
            </p>
            <a 
                href={largeImageURL}
                target="_blank">
                {tags}
            </a>
            </div>
        </div>     
    )
}

export default Imagen;