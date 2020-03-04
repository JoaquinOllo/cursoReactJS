import React from 'react';
import Imagenes from './Imagenes';
import Paginas from './Paginas';

class Resultado extends React.Component{
    //Funcion que define los valores a utilizar como Props
    MostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        return(
            //iteracion de Imagenes para representar cada objeto y pasar sus PROPS al componente Imagenes
            <div className="container row" style={{display:'flex', justifyContent:'space-around', margin:'auto'}}>
                
                {imagenes.map(imagen =>(
                    <Imagenes 
                        key={imagen.id}
                        imagen={imagen} />
                ))}
                {/* Navegacion de Paginas */}
            </div>
        )            
    }
    render(){
        return(
            <>
                {this.MostrarImagenes()}
                <p>Página actual: {this.props.PaginaActual}</p>
                <Paginas 
                PaginaSiguiente={this.props.PaginaSiguiente} 
                PaginaAnterior={this.props.PaginaAnterior}
                PaginaActual={this.props.pagina} />
            </>
        )
    }
}

export default Resultado;