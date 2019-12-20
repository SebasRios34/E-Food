import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';

export default class InfoCheque extends Component {

    // state = {
    //     numeroCheque:'',
    //     cuentaCheque:'',
    //     booleano:true
    // }
    // handleChange = this.handleChange.bind(this);

    // handleChange(event){
    //     console.log(event.target.value);
    //     const {name, value} = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // }

    continuar = e=>{
        e.preventDefault();
        this.props.siguientePaso();
    }

    back = e=>{
        e.preventDefault();
        this.props.devolverseDeCheque();
    }

    render() {

        const { values, manejoCambio, validarCheque } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                    name="numeroCheque"
                    hintText="Ingrese el numero de cheque"
                    floatingLabelText="Numero cheque"
                    onChange={manejoCambio('numPago')}
                    value={values.numPago}>
                    </TextField>
                    <br/>
                    <TextField
                    name="cuentaCheque"
                    hintText="ingrese el numero de cuenta"
                    floatingLabelText="Cuenta"
                    onChange={manejoCambio('cuenta')}
                    value ={values.cuenta}>
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
                    onClick={validarCheque}>
                    Procesar</button>

                    <RaisedButton 
                    name="siguiente"
                    label ="Siguiente"
                    primary={true}
                    disabled={values.booleano}
                    onClick={this.continuar}>

                    </RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
