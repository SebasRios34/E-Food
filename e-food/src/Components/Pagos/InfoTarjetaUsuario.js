import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import RaisedButton from 'material-ui/RaisedButton';

export default class InfoTarjetaUsuario extends Component {
    
    continuar = e=>{
        e.preventDefault();
        this.props.siguientePaso();
        }
    
    back = e=>{
        e.preventDefault();
        this.props.pasoAnterior();
        }
        
    
    render() {

        const { values, manejoCambio } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                <TextField
                    hintText="Ingrese su numero de tarjeta"
                    floatingLabelText="Tarjeta"
                    onChange={manejoCambio('numTarjeta')}
                    defaultValue ={values.numTarjeta}>
                    </TextField>
                    <br/>
                    <TextField
                    hintText="Ingrese sus apellidos"
                    floatingLabelText="Apellidos"
                    onChange={manejoCambio('apellidos')}
                    defaultValue ={values.nombre}>
                    </TextField>
                    <br/>
                    <TextField
                    hintText="Ingrese su numero telefonico"
                    floatingLabelText="Telefono"
                    onChange={manejoCambio('telefono')}
                    defaultValue ={values.nombre}>
                    </TextField>
                    <br/>
                    <br/>
                    <TextareaAutosize 
                    aria-label="empty textarea" 
                    floatingLabelText="Direccion de envio"
                    placeholder="Direccion" 
                    onChange={manejoCambio('direccion')}
                    defaultValue={values.direccionEnvio}
                    />
                    <br/>
                    
                    <RaisedButton
                    label="Regresar"
                    primary={false}
                    //style={StyleSheet.button}
                    onClick={this.back}>
                    </RaisedButton>
                    
                    <RaisedButton
                    label="Continuar"
                    primary={true}
                    //style={StyleSheet.button}
                    onClick={this.continuar}>
                    </RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
