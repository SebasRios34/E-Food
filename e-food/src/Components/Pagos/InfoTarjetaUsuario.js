import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';

export default class InfoTarjetaUsuario extends Component {
    
        state={
            tipoTarjeta:'',
            numTarjeta:'',
            mesExpiracion:'',
            anioExpiracion:'',
            booleano:true
        };
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
        this.props.pasoAnterior();
        }
        
    saltar = e=>{
        e.preventDefault();
        this.props.saltarACheque();
        }

    
    validarTarjeta = e =>{
        var variable = false;
        e.preventDefault();
        if(this.state.tipoTarjeta === 'visa' || this.state.tipoTarjeta ==='Visa' || this.state.tipoTarjeta === 'VISA'){
            if(this.state.numTarjeta.startsWith('1')){
                console.log('codigo de tarjeta visa, todo bien ')
                this.setState({
                    booleano:variable
                })
                
            }else if(this.state.numTarjeta.startsWith('2')){
                console.log('codigo de tarjeta mastercard, verificar numero o tipo de tarjeta')
                variable = true;
                this.setState({
                    booleano:variable
                })
            }else{
                console.log('codigo invalido, favor verificar')
                variable = true;
                this.setState({
                    booleano:variable
                })
            }
        }else if(this.state.tipoTarjeta === 'mastercard' || this.state.tipoTarjeta ==='Mastercard' || this.state.tipoTarjeta === 'MASTERCARD'){
            if(this.state.numTarjeta.startsWith('2')){
                console.log('codigo de mastercard, todo bien')
                this.setState({
                    booleano:variable
                })
            }else if(this.state.numTarjeta.startsWith('1')){
                console.log('codigo de visa, favor verificar numero o tipo de tarjeta')
                variable = true;
                this.setState({
                    booleano:variable
                })
            }else{
                console.log('codigo invalido, favor verificar de nuevo')
                variable = true;
                this.setState({
                    booleano:variable
                })
            }
        }else{
            console.log('tipo de tarjeta invalido')
            variable = true;
                this.setState({
                    booleano:variable
                })
        }
        this.isEnabled(variable);
    }
    
    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    
                    <TextField
                        name="tipoTarjeta"
                        hintText="ej. Visa/Mastercard"
                        floatingLabelText="Tipo de tarjeta"
                        onChange={this.handleChange}
                        value={this.state.tipoTarjeta}>
                        
                    </TextField>
                    <br/>
                    <TextField
                    name="numTarjeta"
                    hintText="digite el numero de su tarjeta"
                    floatingLabelText="Numero de tarjeta"
                    onChange={this.handleChange}
                    value ={this.state.numTarjeta}>
                    </TextField>
                    <br/>
                    <TextField
                    name="mesExpiracion"
                    hintText="mes de expiracion de la tarjeta ej. 01, 04"
                    floatingLabelText="Mes"
                    onChange={this.handleChange}
                    value={this.state.mesExpiracion}>
                    </TextField>
                    <br/>
                    <TextField
                    name="anioExpiracion"
                    hintText="año de expiracion de la tarjeta. ej. 2024"
                    floatingLabelText="Año"
                    onChange={this.handleChange}
                    value={this.state.anioExpiracion}>
                    </TextField>
                    <br/>
                    <TextField
                    hintText="codigo"
                    floatingLabelText="CVV"
                    onChange={this.handleChange}>
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
                    onClick={this.validarTarjeta}>
                    Procesar</button>

                    <RaisedButton 
                    name="siguiente"
                    label ="Siguiente"
                    primary={true}
                    disabled={this.state.booleano}
                    onClick={this.saltar}>

                    </RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
