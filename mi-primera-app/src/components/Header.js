import React, {Component} from 'react';
import logo from '../logo.svg';


class Header extends Component {
    render(){
        return(
            <header className="App-header jumbotron m-3">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome, {this.props.nombre}!
            Edit your <code>src/App.js</code> and save to reload.
          </p>
          </header>
        );
    }
}

export default Header;