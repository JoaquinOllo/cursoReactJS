import React from 'react';

//Asignamos a los Props los parametros del Array que vamos a utilizar dentro de nuestro componente
const Paginas = (props) =>{

    return(
        <div>
            <button 
            className="btn btn-primary"
            onClick={props.PaginaAnterior}>
               &larr; Anterior
            </button>
            <button 
            className="btn btn-primary"
            onClick={props.PaginaSiguiente}>
                &rarr; Siguiente
            </button>
        </div>
    )
}

export default Paginas;