import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import RaisedButton from 'material-ui/RaisedButton';
//import moduleName from 'module';



export default class InfoUsuario extends Component {
    
    continuar = e=>{
    e.preventDefault();
    this.props.siguientePaso();
    }
    
    render() {

        const { values, manejoCambio } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                    hintText="Ingrese su nombre"
                    floatingLabelText="Nombre"
                    onChange={manejoCambio('nombre')}
                    defaultValue ={values.nombre}>
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
                    defaultValue ={values.telefono}>
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
