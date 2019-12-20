import React, { Component } from 'react'
import InfoUsuario from './Pagos/InfoUsuario';
import InfoTarjetaUsuario from './Pagos/InfoTarjetaUsuario';
import ConfirmacionUsuario from './Pagos/ConfirmacionUsuario';
import Facebook from './Facebook';
import MetodoPago from './Pagos/MetodoPago';
import InfoCheque from './Pagos/InfoCheque';



export default class Checkout extends Component {
    
    
    state ={
        paso: 1,
        nombre: '',
        apellidos: '',
        telefono:'',
        direccionEnvio:'',
        numTarjeta:''
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
    
    render() {

        const {paso} = this.state;
        const {nombre, apellidos, telefono, direccionEnvio,
        numTarjeta} = this.state;

        const values ={ nombre, apellidos, telefono,
        direccionEnvio, numTarjeta};


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
