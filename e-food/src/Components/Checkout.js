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
        telefono:0,
        direccionEnvio:'',
        numTarjeta:0
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
            paso: 5
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
                    <div
                    siguientePaso={this.siguientePaso}
                    manejoCambio ={this.manejoCambio}
                    values = {values}>
                        
                        <MetodoPago/>

                    </div>
                )
            case 3:
                {/*en caso que escoja tarjetas */}
                return(
                    <div
                    siguientePaso={this.siguientePaso}
                    manejoCambio ={this.manejoCambio}
                    values = {values}>
                        <h3>Ingrese los datos de su tarjeta</h3>
                        <hr/>
                        <InfoTarjetaUsuario/>

                    </div>
                )
            case 4: 
                {/*en caso que escoja  cheques*/}
                return(
                    <div
                    siguientePaso={this.siguientePaso}
                    manejoCambio ={this.manejoCambio}
                    values = {values}>
                        <InfoCheque/>
                        
                    </div>
                )
            case 5:
                {/*confirmacion del usuario */}
                return(
                    <div
                    siguientePaso={this.siguientePaso}
                    manejoCambio ={this.manejoCambio}
                    values = {values}>
                        <ConfirmacionUsuario/>
                    </div>
                )
        }

        
    }
}
