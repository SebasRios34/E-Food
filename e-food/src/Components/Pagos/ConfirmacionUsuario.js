import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import { RaisedButton, List, ListItem } from 'material-ui'

export default class ConfirmacionUsuario extends Component {
    
    inicio = (e)=>{
        e.preventDefault();
        this.props.inicio();
    }

    saltarDos = (e)=>{
        e.preventDefault();
        this.props.saltarACheque();
    }

    siguientePaso = (e)=>{
        e.preventDefault();
        this.props.siguientePaso();
    }
    render() {

        const { values: {nombre, apellidos, telefono, direccionEnvio, metodoPago,
        tipo, numPago, cuenta, total }} = this.props;

        return (
            <React.Fragment>
                <MuiThemeProvider>

                    <List>
                        <h6>informacion personal</h6>
                        <ListItem
                        primaryText="Nombre"
                        secondaryText={nombre}
                        />
                        <ListItem
                        primaryText="Apellidos"
                        secondaryText={apellidos}
                        />
                        <br/>  
                        <h6>Informacion de envio</h6> 
                        <ListItem
                        primaryText="Telefono"
                        secondaryText={telefono}
                        /> 
                        <ListItem
                        primaryText="Direccion"
                        secondaryText={direccionEnvio}
                        />
                        <br/>
                        <h6>informacion de pago</h6>
                        <ListItem
                        primaryText="Metodo de Pago"
                        secondaryText={metodoPago}
                        />
                        <ListItem
                        primaryText="Tipo"
                        secondaryText={tipo}
                        />
                        <ListItem
                        primaryText="Numero de metodo de pago"
                        secondaryText={numPago}
                        />
                        <ListItem
                        primaryText="Cuenta"
                        secondaryText={cuenta}
                        />
                    </List>
                    <RaisedButton
                    name="Cancelar"
                    label ="Cancelar"
                    primary={false}
                    onClick={this.saltarDos}/>
                    <RaisedButton
                    name="siguiente"
                    label ="Siguiente"
                    primary={true}
                    onClick={this.siguientePaso}/>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}
