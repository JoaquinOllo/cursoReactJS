import React, { Component } from 'react';

// Importación de componentes
import Button from './Button';

var Inputs = [
    {
        id: 0,
        miNombre: "Name",
        texto: "Nombre",
        type: "text",
        PHolder: "Ingrese su nombre"
    },
    {
        id: 1,
        miNombre: "email",
        texto: "Correo",
        type: "text",
        PHolder: "Ingrese su correo"
    },
    {
        id: 2,
        miNombre: "tel",
        texto: "Telefono",
        type: "text",
        PHolder: "Ingrese su teléfono"
    }
]

class Form extends Component {
    render() {
        return (
            //sólo puede devolver un elemento. Cuando se requiere que se devuelvan varios elementos, pero que no esten contenidos por un div, se suele utilizar un fragment
            <React.Fragment>
                <form action="algo.js" method="post">
                    {
                        Inputs.map((campo) => (
                            <Input miNombre={campo.miNombre} texto={campo.texto} PHolder={campo.PHolder} type={campo.type} />
                        ))
                    }
                    <label for="consulta">Consulta</label>
                    <textarea name="consulta"></textarea>
                    <div class="btn-group"></div>
                    <Button Valor="Aceptar"></Button>
                    <Button Valor="Cancelar"></Button>
                </form>
            </React.Fragment>
        );
    }
}

class Input extends Component {
    render() {
        return (
            <>
                <label for={this.props.miNombre}>{this.props.texto}</label>
                <input name={this.props.miNombre}
                    placeholder={this.props.PHolder}
                    type={this.props.type} />

            </>
        );
    }
}

export default Form;