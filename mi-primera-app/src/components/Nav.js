import React, { Component } from 'react';

var links = [
    { url: 'https://facebook.com', clase:'fa fa-facebook', title: 'Facebook' },
    { url: 'https://instagram.com', clase:'fa fa-instagram', title: 'Instagram' },
    { url: 'https://whatsapp.com', clase:'fa fa-whatsapp', title: 'WhatsApp' },
    { url: 'https://linkedin.com', clase:'fa fa-linkedin', title: 'LinkedIn' }
];

class Nav extends Component {
    /*CREACIÓN DE COMPONENTES */

    componentWillMount() {
        //este método se ejecuta antes de renderizar el componente

    };
    render() {
        // renderiza el componente
        return (
            <ul className="menu">
                {
                    links.map((link, index) => (
                        <Link
                            NumList= {index + parseInt(this.props.NumList)}
                            Dir={link.url}
                            Clases={link.clase}
                            Nombre={link.title}
                        />
                    ))
                }
            </ul>
        );
    }
    componentDidMount() {
        //funciona después de renderizar el componente
    };
    componentWillUpdate() {

    };
    componentDidUpdate() {
        //funciona después de actualizar el componente
    };
    componentWillReceiveProps(prevProps, nextProps) {
        // para la actualización de las propiedades del componente
    };


    /*DESTRUCCIÓN DE COMPONENTES */
    componentWillUnmount() {

    };
}

class Link extends Component{
    render() {
        return (
            <li>
                <a
                    href={this.props.Dir}
                    class={this.props.Clases}
                >
                    {this.props.NumList}. {this.props.Nombre}
                </a>
            </li>
        );
    }
}

export default Nav;
