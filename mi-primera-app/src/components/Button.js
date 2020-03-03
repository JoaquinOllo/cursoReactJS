import React, {Component} from 'react';

class Button extends Component {
    render(){
        return (
            <button >
                {this.props.Valor}
            </button>
        )
    }
}

export default Button;