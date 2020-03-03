import React, { Component } from 'react';
import './App.css';

//Importación de componentes
import Nav from './components/Nav';
import Form from './components/Footer';
import Header from './components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      idusuario:"007",
      usuario: "cristian",
      login: true,
      clicks: 0
    }
  };

  funcionLogout(ev){
    ev.preventDefault();
    this.setState(function(){
      this.state.login = false;
    });
  }

  contarClick = (ev) => {
    ev.preventDefault()
    this.setState({clicks: this.state.clicks + 1})
  }

  render() {
      var nombre = "cristian";    
    return (

      <div className="App">
          <Header nombre={nombre} />
          <p>Inicio sesión: {this.state.usuario}</p>
          <p>{this.state.login?"Conectado":"No conectado"}</p>
          <button onClick={this.contarClick}>{this.state.clicks}</button>
          <Nav NumList="3" />
          <Form Nombre="Ingrese su Nombre"
            Enviar="Enviar Consulta"
          />
      </div>
    );
  }

}

export default App;
