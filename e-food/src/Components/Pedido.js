import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

export default class Pedido extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="6">
                        <Card body>
                                    <div id= "Div1Pedido">
                                    <h4 className="header">Pedido</h4>
                                    <div col-md-1 >
                                        <img src={process.env.PUBLIC_URL + '/carrito.png'} alt="carrito" />
                                    </div>
                                    <Link to="/carrito">
                                        <button style={{ borderRadius: 10, backgroundColor: '#133840', color: '#ffffff' }}>
                                            <i className="fas fa-cart-plus" />
                                            Carrito</button>
                                    </Link>
                                    </div>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                                <div id= "Div2Pedido" >
                                    <p><b>Monto actual</b></p>
                                    <p>monto: </p>
                                    <Link to="/checkout">
                                        <button style={{ borderRadius: 10, backgroundColor: '#133840', color: '#ffffff' }}>
                                            Pagar
                            </button>
                                    </Link>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>

        )
    }
}
