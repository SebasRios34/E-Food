import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import { RaisedButton } from 'material-ui'

export default class ConfirmacionUsuario extends Component {
    
    inicio = (e)=>{
        e.preventDefault();
        this.props.inicio();
    }
    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider>
                    <RaisedButton
                    name="inicio"
                    label ="Inicio"
                    primary={true}
                    onClick={this.inicio}/>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}
