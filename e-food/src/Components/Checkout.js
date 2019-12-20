import React, { Component } from 'react'
import InfoUsuario from './Pagos/InfoUsuario';
import InfoTarjetaUsuario from './Pagos/InfoTarjetaUsuario';
import ConfirmacionUsuario from './Pagos/ConfirmacionUsuario';
import MetodoPago from './Pagos/MetodoPago';
import InfoCheque from './Pagos/InfoCheque';
import Facebook from './Facebook';
import GoogleLogin from './GoogleLogin';



export default class Checkout extends Component {
    
    
    state ={
        paso: 1,
        nombre: '',
        apellidos: '',
        telefono:'',
        direccionEnvio:'',
        metodoPago:'',
        tipo:'',
        numPago:'',
        cuenta:'',
        total:'',
        booleano: true
    }

    inicio =()=>{
        this.setState({
            paso: 1
        })
    }


    //para moverse de un case a otro
    siguientePaso =()=>{
        const {paso} = this.state;
        this.setState({
            paso: paso + 1
        });
    }

    pasoAnterior =()=>{
        const {paso} = this.state;
        this.setState({
            paso: paso - 1
        });
    }

    //para ir de metodo de pago a cheque
    //y de cheque de vuelta a metodo de pago
    saltarACheque = ()=>{
        const {paso} =this.state;
        this.setState({
            paso: paso + 2
        })
    }

    devolverseDeCheque = ()=>{
        const {paso} =this.state;
        this.setState({
            paso: paso - 2
        })
    }

    //para direccionar al usuario a confirmacion
    confirmacion=()=>{
        const {paso} = this.state;
        this.setState({
            paso: paso + 3
        });
    }

    manejoCambio =(input)=> e =>{
        this.setState({[input]: e.target.value})
    }

    validarTarjeta = e =>{
        var variable = false;
        e.preventDefault();
        if(this.state.tipo === 'visa' || this.state.tipo ==='Visa' || this.state.tipo === 'VISA'){
            if(this.state.numPago.startsWith('1')){
                console.log('codigo de tarjeta visa, todo bien ')
                this.setState({
                    booleano:variable
                })
                
            }else if(this.state.numPago.startsWith('2')){
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
        }else if(this.state.tipo === 'mastercard' || this.state.tipo ==='Mastercard' || this.state.tipo === 'MASTERCARD'){
            if(this.state.numPago.startsWith('2')){
                console.log('codigo de mastercard, todo bien')
                this.setState({
                    booleano:variable
                })
            }else if(this.state.numPago.startsWith('1')){
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
    }
    
    render() {

        const {paso} = this.state;
        const {nombre, apellidos, telefono, direccionEnvio, metodoPago,
        tipo, numPago, cuenta, total, booleano
        } = this.state;

        const values ={nombre, apellidos, telefono, direccionEnvio, metodoPago,
            tipo, numPago, cuenta, total, booleano};


        switch(paso){
            case 1:
                {/*introduccion de los datos del cliente*/}
                return (
                    <React.Fragment>
                        <div className="card card-body col-md-6 row">
                            <h3>ingrese sus datos</h3>
                            <hr/>
                            <InfoUsuario 
                            siguientePaso={this.siguientePaso}
                            manejoCambio ={this.manejoCambio}
                            values = {values}>
                            </InfoUsuario>
                        </div>
                        <div class>
                            <Facebook/>
                            <GoogleLogin/>
                        </div>
                        
                        
                    </React.Fragment>
                )
            case 2:
                {/*metodo de pago del cliente */}
                return(
                    <div>

                        <MetodoPago
                        siguientePaso={this.siguientePaso}
                        manejoCambio ={this.manejoCambio}
                        pasoAnterior ={this.pasoAnterior}
                        saltarACheque = {this.saltarACheque}
                        devolverseDeCheque = {this.devolverseDeCheque}
                        confirmacion = {this.confirmacion}
                        values = {values}/>

                    </div>
                )
            case 3:
                {/*en caso que escoja tarjetas */}
                return(
                    <div>
                    
                        <h3>Ingrese los datos de su tarjeta</h3>
                        <hr/>
                        <InfoTarjetaUsuario
                        siguientePaso={this.siguientePaso}
                        manejoCambio ={this.manejoCambio}
                        pasoAnterior ={this.pasoAnterior}
                        saltarACheque = {this.saltarACheque}
                        validarTarjeta = {this.validarTarjeta}
                        values = {values}/>
                    </div>
                )
            case 4: 
                {/*en caso que escoja  cheques*/}
                return(
                    <div>
                    <h3>Ingrese los datos de su cheque</h3>
                        <hr/>
                        <InfoCheque
                        siguientePaso={this.siguientePaso}
                        manejoCambio ={this.manejoCambio}
                        devolverseDeCheque = {this.devolverseDeCheque}
                        values = {values}/>
                        
                    </div>
                )
            case 5:
                {/*confirmacion del usuario */}
                return(
                    <div>
                        <h3>Confirmacion de datos</h3>
                        <hr/>
                        <ConfirmacionUsuario
                        siguientePaso={this.siguientePaso}
                        manejoCambio ={this.manejoCambio}
                        inicio = {this.inicio}
                        values = {values}/>
                    </div>
                )
        }

        
    }
}
