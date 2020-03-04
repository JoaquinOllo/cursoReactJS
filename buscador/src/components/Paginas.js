import React from 'react';
import Button from '@material-ui/core/Button'

//Asignamos a los Props los parametros del Array que vamos a utilizar dentro de nuestro componente
const Paginas = (props) =>{

    return(
        <div>
            <Button 
            className="btn btn-primary"
            onClick={props.PaginaAnterior}>
               &larr; Anterior
            </Button>
            <Button 
            className="btn btn-primary"
            onClick={props.PaginaSiguiente}>
                &rarr; Siguiente
            </Button>
        </div>
    )
}

export default Paginas;