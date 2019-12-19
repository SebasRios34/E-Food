import React, { Component } from 'react'
import InfoUsuario from './InfoUsuario';
import InfoTarjetaUsuario from './InfoTarjetaUsuario';
import ConfirmacionUsuario from './ConfirmacionUsuario';
import Facebook from './Facebook';



export default class Checkout extends Component {
    
    state ={
        paso: 1,
        nombre: '',
        apellidos: '',
        telefono:0,
        direccionEnvio:'',
        numTarjeta:0
    }

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
                return(
                    <div>
                        <h3>Ingrese los datos de su tarjeta</h3>
                        <hr/>
                        <InfoTarjetaUsuario 
                        siguientePaso={this.siguientePaso}
                        manejoCambio ={this.manejoCambio}
                        pasoAnterior={this.pasoAnterior}
                        values = {values}>
                        </InfoTarjetaUsuario>

                    </div>
                )
            case 3:
                return(
                    <div>
                        <h3>Confirmacion de datos</h3>
                        <ConfirmacionUsuario>

                        </ConfirmacionUsuario>
                    </div>
                )
        }

        
    }
}
