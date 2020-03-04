import React, {Component} from 'react';
import './App.css';

//Importamos los componentes que va a utilizar APP
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component{
  //definimos los Estados 
  state = {
    termino: '',
    imagenes:[],
    cantidad: 0,
    pagina:0,
    ultimaPagina:''
  }

  /// funcion que define el nuevo estado y metodo callback mediante promise (espera a la resolucion de ConsultarAPI)
  BuscarDatos = (termino, cantidad) =>{ 
    this.setState({
      termino:termino,
      cantidad:cantidad,
      pagina:1
    }, () => {
        this.ConsultarAPI();
      }
    )
  }
  
  ///Funcion que solicita los datos al servidor utilizando
  ConsultarAPI = () => {
    const termino = this.state.termino
    const cantidad = this.state.cantidad
    const pagina = this.state.pagina
    const url = `https://pixabay.com/api/?key=15481833-036eb0825e760d732db399f86&q=${termino}&per_page=${cantidad}&page=${pagina}`;
    console.log(url)

    //Solicitud de Datos utilizando las constantes y devuelve una funcion que define un nuevo estado de IMAGENES y una Array de Objetos
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({
        imagenes: resultado.hits,
        ultimaPagina: parseInt( resultado.totalHits / cantidad )
      }, () => {
        console.log(this.state.ultimaPagina)
      }))
    
  }

  PaginaSiguiente = () => {
    let pagina = this.state.pagina
    if (pagina == this.state.ultimaPagina) return;
    pagina++
    this.setState({pagina: pagina}, () => {this.ConsultarAPI()})
  }

  PaginaAnterior = () => {
    let pagina = this.state.pagina
    if (pagina == 1) return;
    pagina = pagina--
    this.setState({pagina: pagina}, () => {this.ConsultarAPI()})
  }

  render(){
    return(
    <>
      <header className="jumbotron bg-dark text-light m-3">
        <h1>Buscador PIXABAY</h1>
        {/* Pasamos la funcion BuscarDatos mediante PROPS*/}
        <Buscador BuscarDatos={this.BuscarDatos} /> 
      </header>
      <main>
        {/*Pasamos el Array de objetos mediante PROPS y dejamos que Resultado haga el mapeo*/}
          <Resultado imagenes={this.state.imagenes} PaginaSiguiente={this.PaginaSiguiente} PaginaAnterior={this.PaginaAnterior} PaginaActual={this.state.pagina}/>
      </main>
    </>
    )
  }
}

export default App;
