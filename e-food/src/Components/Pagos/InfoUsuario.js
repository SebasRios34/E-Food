import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import RaisedButton from 'material-ui/RaisedButton';
import Facebook from '../Login/FacebookLogin/index';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
//import moduleName from 'module';



export default class InfoUsuario extends Component {

    continuar = e => {
        e.preventDefault();
        this.props.siguientePaso();
    }

    validaCupon = (e) => {
        e.preventDefault();
        {/*aqui va el metodo para validar si el cupon tiene validez o no*/ }
    }

    render() {

        const { values, manejoCambio } = this.props;

        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <Row >
                        <Col sm="6">
                            <Card body>
                                <TextField
                                    hintText="Ingrese su nombre"
                                    floatingLabelText="Nombre"
                                    onChange={manejoCambio('nombre')}
                                    defaultValue={values.nombre}>
                                </TextField>
                                <br />
                                <TextField
                                    hintText="Ingrese sus apellidos"
                                    floatingLabelText="Apellidos"
                                    onChange={manejoCambio('apellidos')}
                                    defaultValue={values.apellidos}>
                                </TextField>
                                <br />
                                <TextField
                                    hintText="Ingrese su numero telefonico"
                                    floatingLabelText="Telefono"
                                    onChange={manejoCambio('telefono')}
                                    defaultValue={values.telefono}>
                                </TextField>
                                <br />
                                <br />
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    floatingLabelText="Direccion de envio"
                                    placeholder="Direccion"
                                    onChange={manejoCambio('direccion')}
                                    defaultValue={values.direccionEnvio}
                                />
                                <br />
                                <TextField
                                    hintText="Ingrese su numero de cupon"
                                    floatingLabelText="Cupon"
                                    onChange={manejoCambio('cupon')}
                                    defaultValue={values.cupon}>
                                </TextField>
                                <br />
                                <br />
                                <RaisedButton
                                    label="Validar Cupon"
                                    primary={false}
                                    //style={StyleSheet.button}
                                    onClick={this.validaCupon}>
                                </RaisedButton>
                                <RaisedButton
                                    label="Continuar"
                                    primary={true}
                                    //style={StyleSheet.button}
                                    onClick={this.continuar}>
                                </RaisedButton>
                            </Card>
                            </Col>
                            <hr />
                            <Col sm="6">
                            <Card body>
                                <div>
                                    <h2>Facebook Login</h2>
                                    <p>
                                        <Facebook />
                                    </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </React.Fragment>
            </MuiThemeProvider>


        )
    }
}
