import React, { Component } from 'react'
import InfoUsuario from './Pagos/InfoUsuario';
import InfoTarjetaUsuario from './Pagos/InfoTarjetaUsuario';
import ConfirmacionUsuario from './Pagos/ConfirmacionUsuario';
import MetodoPago from './Pagos/MetodoPago';
import InfoCheque from './Pagos/InfoCheque';
//import GoogleLogin from './GoogleLogin';
//import DragDrop from './Login/DragDrop/index'
import OrdenExitosa from './Pagos/OrdenExitosa';
import OrdenCancelada from './Pagos/OrdenCancelada';



export default class Checkout extends Component {


    state = {
        paso: 1,
        nombre: '',
        apellidos: '',
        telefono: '',
        direccionEnvio: '',
        metodoPago: 'Efectivo',
        tipo: '',
        numPago: '',
        cuenta: '',
        total: '',
        booleano: true,
        cupo: ''
    }

    inicio = () => {
        this.setState({
            paso: 1
        })
    }


    //para moverse de un case a otro
    siguientePaso = () => {
        const { paso } = this.state;
        this.setState({
            paso: paso + 1
        });
    }

    pasoAnterior = () => {
        const { paso } = this.state;
        this.setState({
            paso: paso - 1
        });
    }

    //para ir de metodo de pago a cheque
    //y de cheque de vuelta a metodo de pago
    saltarACheque = () => {
        const { paso } = this.state;
        this.setState({
            paso: paso + 2
        })
    }

    devolverseDeCheque = () => {
        const { paso } = this.state;
        this.setState({
            paso: paso - 2
        })
    }

    //para direccionar al usuario a confirmacion
    confirmacion = () => {
        const { paso } = this.state;
        this.setState({
            paso: paso + 3
        });
    }

    manejoCambio = (input) => e => {
        this.setState({ [input]: e.target.value })
    }

    validarTarjeta = e => {
        var variable = false;
        e.preventDefault();
        if (this.state.tipo === 'visa' || this.state.tipo === 'Visa' || this.state.tipo === 'VISA') {
            if (this.state.numPago.startsWith('1')) {
                console.log('codigo de tarjeta visa, todo bien ')
                this.setState({
                    booleano: variable
                })

            } else if (this.state.numPago.startsWith('2')) {
                console.log('codigo de tarjeta mastercard, verificar numero o tipo de tarjeta')
                variable = true;
                this.setState({
                    booleano: variable
                })
            } else {
                console.log('codigo invalido, favor verificar')
                variable = true;
                this.setState({
                    booleano: variable
                })
            }
        } else if (this.state.tipo === 'mastercard' || this.state.tipo === 'Mastercard' || this.state.tipo === 'MASTERCARD') {
            if (this.state.numPago.startsWith('2')) {
                console.log('codigo de mastercard, todo bien')
                this.setState({
                    booleano: variable
                })
            } else if (this.state.numPago.startsWith('1')) {
                console.log('codigo de visa, favor verificar numero o tipo de tarjeta')
                variable = true;
                this.setState({
                    booleano: variable
                })
            } else {
                console.log('codigo invalido, favor verificar de nuevo')
                variable = true;
                this.setState({
                    booleano: variable
                })
            }
        } else {
            console.log('tipo de tarjeta invalido')
            variable = true;
            this.setState({
                booleano: variable
            })
        }
        this.MetodoPago();
    }

    validarCheque = e => {
        var variable = false;
        if (this.state.numPago.length > 0) {
            if (this.state.cuenta.length > 0) {
                alert('se ha procesado con satisfaccion');
                this.setState({
                    booleano: variable
                })
            } else {
                alert('el numero de cuenta es requerido');
                variable = true
                this.setState({
                    booleano: variable
                })
            }
        } else {
            alert('el numero de cheque es requerido');
            variable = true
            this.setState({
                booleano: variable
            })
        }
        this.MetodoPago();
    }

    MetodoPago = () => {
        if (this.state.tipo.length > 0 && this.state.numPago.length > 0) {
            this.setState({
                metodoPago: 'tarjetas'
            })
        } else if (this.state.numPago.length > 0 && this.state.cuenta.length > 0) {
            this.setState({
                metodoPago: 'cheque'
            })
        } else {
            this.setState({
                metodoPago: 'efectivo'
            })
        }
    }

    render() {

        const { paso } = this.state;
        const { nombre, apellidos, telefono, direccionEnvio, metodoPago,
            tipo, numPago, cuenta, total, booleano, cupon
        } = this.state;

        const values = {
            nombre, apellidos, telefono, direccionEnvio, metodoPago,
            tipo, numPago, cuenta, total, booleano, cupon
        };


        switch (paso) {
            case 1:
                {/*introduccion de los datos del cliente*/ }
                return (

                    <React.Fragment>
                        <div className="card card-body col-md-6 row">
                            <h3>ingrese sus datos</h3>
                            <hr />
                            <InfoUsuario
                                siguientePaso={this.siguientePaso}
                                manejoCambio={this.manejoCambio}
                                values={values}>
                            </InfoUsuario>

                        </div>
                    </React.Fragment>


                )
            case 2:
                {/*metodo de pago del cliente */ }
                return (
                    <div>

                        <MetodoPago
                            siguientePaso={this.siguientePaso}
                            manejoCambio={this.manejoCambio}
                            pasoAnterior={this.pasoAnterior}
                            saltarACheque={this.saltarACheque}
                            devolverseDeCheque={this.devolverseDeCheque}
                            confirmacion={this.confirmacion}
                            metodoPago={this.MetodoPago}
                            values={values} />

                    </div>
                )
            case 3:
                {/*en caso que escoja tarjetas */ }
                return (
                    <div>

                        <h3>Ingrese los datos de su tarjeta</h3>
                        <hr />
                        <InfoTarjetaUsuario
                            siguientePaso={this.siguientePaso}
                            manejoCambio={this.manejoCambio}
                            pasoAnterior={this.pasoAnterior}
                            saltarACheque={this.saltarACheque}
                            validarTarjeta={this.validarTarjeta}
                            values={values} />
                    </div>
                )
            case 4:
                {/*en caso que escoja  cheques*/ }
                return (
                    <div>
                        <h3>Ingrese los datos de su cheque</h3>
                        <hr />
                        <InfoCheque
                            siguientePaso={this.siguientePaso}
                            manejoCambio={this.manejoCambio}
                            devolverseDeCheque={this.devolverseDeCheque}
                            validarCheque={this.validarCheque}
                            values={values} />

                    </div>
                )
            case 5:
                {/*confirmacion del usuario */ }
                return (
                    <div>
                        <h3>Confirmacion de datos</h3>
                        <hr />
                        <ConfirmacionUsuario
                            siguientePaso={this.siguientePaso}
                            manejoCambio={this.manejoCambio}
                            saltarACheque={this.saltarACheque}
                            inicio={this.inicio}
                            values={values} />
                    </div>
                )
            case 6:
                {/*pantalla de success */ }
                return (
                    <div>
                        <h3>¡Orden existosa!</h3>
                        <hr />
                        <OrdenExitosa />
                    </div>
                )
            case 7:
                {/*pantalla de cancelar */ }
                return (
                    <div>
                        <h3>¡Orden Cancelada!</h3>
                        <hr />
                        <OrdenCancelada />
                    </div>
                )
        }


    }
}
