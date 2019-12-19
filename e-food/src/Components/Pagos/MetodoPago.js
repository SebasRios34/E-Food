import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MetodoPago extends Component {
    
    continuar = e=>{
        e.preventDefault();
        this.props.siguientePaso();
        }
    
    back = e=>{
        e.preventDefault();
        this.props.pasoAnterior();
        }
    
    saltarACheque = e =>{
        e.preventDefault();
        this.props.saltarACheque();
    }

    confirmacion =(e)=>{
        e.preventDefault();
        this.props.confirmacion();
    }

    render() {

        const { values, manejoCambio } = this.props;
        
        return (
            <React.Fragment>
                <div>
                    <h3>
                        Escoja un metodo de pago:
                    </h3>
                    <hr/>
                        <button
                        onClick={this.confirmacion}>
                            Efectivo
                        </button>
                    <br/>
                    <br/>
                    <button onClick={this.continuar}>
                        Tarjeta
                    </button>
                </div>
            </React.Fragment>
        )
    }
}
