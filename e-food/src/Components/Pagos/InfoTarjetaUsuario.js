import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';

export default class InfoTarjetaUsuario extends Component {

    state = {
        //         tipoTarjeta:'',
        //         numTarjeta:'',
        mesExpiracion: '',
        anioExpiracion: '',
        //         booleano:true
    };
    handleChange = this.handleChange.bind(this);




    handleChange(event) {
        console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    continuar = e => {
        e.preventDefault();
        this.props.siguientePaso();
    }

    back = e => {
        e.preventDefault();
        this.props.pasoAnterior();
    }

    saltar = e => {
        e.preventDefault();
        this.props.saltarACheque();
    }

    render() {

        const { values, manejoCambio, validarTarjeta } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>

                    <TextField
                        name="tipoTarjeta"
                        hintText="ej. Visa/Mastercard"
                        floatingLabelText="Tipo de tarjeta"
                        onChange={manejoCambio('tipo')}
                        defaultValue={values.tipo}>

                    </TextField>
                    <br />
                    <TextField
                        name="numTarjeta"
                        hintText="digite el numero de su tarjeta"
                        floatingLabelText="Numero de tarjeta"
                        onChange={manejoCambio('numPago')}
                        defaultValue={values.numPago}>
                    </TextField>
                    <br />
                    <TextField
                        name="mesExpiracion"
                        hintText="mes de expiracion de la tarjeta ej. 01, 04"
                        floatingLabelText="Mes"
                        onChange={this.handleChange}
                        value={this.state.mesExpiracion}>
                    </TextField>
                    <br />
                    <TextField
                        name="anioExpiracion"
                        hintText="año de expiracion de la tarjeta. ej. 2024"
                        floatingLabelText="Año"
                        onChange={this.handleChange}
                        value={this.state.anioExpiracion}>
                    </TextField>
                    <br />
                    <TextField
                        hintText="codigo"
                        floatingLabelText="CVV"
                        onChange={this.handleChange}>
                    </TextField>
                    <br />
                    <br />

                    <RaisedButton
                        label="Regresar"
                        primary={false}
                        //style={StyleSheet.button}
                        onClick={this.back}>
                    </RaisedButton>

                    <button
                        className="success"
                        //style={StyleSheet.button}
                        onClick={validarTarjeta}>
                        Procesar</button>

                    <RaisedButton
                        name="siguiente"
                        label="Siguiente"
                        primary={true}
                        disabled={values.booleano}
                        onClick={this.saltar}>

                    </RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
