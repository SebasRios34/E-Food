import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider } from 'material-ui/styles';

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
                <MuiThemeProvider>
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
                    <br/>
                    <br/>
                    <button onClick={this.saltarACheque}>
                        Cheque
                    </button>
                    <br/>
                    <br/>
                    <RaisedButton
                        label="Regresar"
                        primary={false}
                        //style={StyleSheet.button}
                        onClick={this.back}>
                        </RaisedButton>
                </div>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}
