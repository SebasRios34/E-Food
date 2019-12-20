import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';

export default class InfoCheque extends Component {

    state = {
        numeroCheque:'',
        cuentaCheque:'',
        booleano:true
    }
    handleChange = this.handleChange.bind(this);

    handleChange(event){
        console.log(event.target.value);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    continuar = e=>{
        e.preventDefault();
        this.props.siguientePaso();
    }

    back = e=>{
        e.preventDefault();
        this.props.devolverseDeCheque();
    }

    validarCheque = e =>{
        var variable = false;
        if(this.state.numeroCheque.length > 0){
            if(this.state.cuentaCheque.length > 0){
                alert('se ha procesado con satisfaccion');
                this.setState({
                    booleano:variable
                })
            }else{
                alert('el numero de cuenta es requerido');
                variable = true
                this.setState({
                    booleano:variable
                })
            }
        }else{
            alert('el numero de cheque es requerido');
            variable = true
            this.setState({
                booleano:variable
            })
        }
    }
    render() {
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                    name="numeroCheque"
                    hintText="Ingrese el numero de cheque"
                    floatingLabelText="Numero cheque"
                    onChange={this.handleChange}
                    value={this.state.numeroCheque}>
                    </TextField>
                    <br/>
                    <TextField
                    name="cuentaCheque"
                    hintText="ingrese el numero de cuenta"
                    floatingLabelText="Cuenta"
                    onChange={this.handleChange}
                    defaultValue ={this.state.cuentaCheque}>
                    </TextField>
                    <br/>
                    <br/>

                    <RaisedButton
                    label="Regresar"
                    primary={false}
                    //style={StyleSheet.button}
                    onClick={this.back}>
                    </RaisedButton>
                    
                    <button
                    className="success"
                    //style={StyleSheet.button}
                    onClick={this.validarCheque}>
                    Procesar</button>

                    <RaisedButton 
                    name="siguiente"
                    label ="Siguiente"
                    primary={true}
                    disabled={this.state.booleano}
                    onClick={this.continuar}>

                    </RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
