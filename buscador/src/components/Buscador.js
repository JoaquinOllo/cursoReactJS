import React from 'react';
import Button from '@material-ui/core/Button'

class Buscador extends React.Component {
    //Definimos cual es el elemento al que vamos a referenciar cuando realicemos el evento Submit del Formulario y levantemos el valor escrito en el mismo.
    BusquedaRef = React.createRef()
    CantidadRef = React.createRef()

    //Funcion cuya finalidad es pasar el valor del Form>input al Componente Padre APP
    handleDatos = (e) => {
        //Evita que el formulario ejecute la recarga de la pagina (comportamiento por defecto del formulario)
        e.preventDefault();
        const termino = this.BusquedaRef.current.value;
        const cantidad = this.CantidadRef.current.value;
        //definimos cual es el parametro que se va a pasar a la funcion BuscarDatos asociada al componete
        this.props.BuscarDatos(termino, cantidad)
    }

    render() {
        return (
            // Efectua la funcion que levanta los datos del tag input y los pasa al componente padre (Metodo React.CreateRef() necesario para la vinculacion)
            <form onSubmit={this.handleDatos}>
                <div className="form-group row">
                    <input
                        ref={this.BusquedaRef}
                        className="form-control"
                        type="text"
                        placeholder="Escriba lo que desee Buscar" />
                    <select ref={this.CantidadRef} className="form-control">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <input
                    className="form-control"
                    type="submit"
                    value="Buscar" />
            </form>
        )
    }
}

export default Buscador;