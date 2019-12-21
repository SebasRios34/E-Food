import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pedido extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="col-md-1 pedido" >
                    <div className="card card-body">
                        <h4 className="header">Pedido</h4>
                        <div col-md-1 >
                            <img src={process.env.PUBLIC_URL + '/carrito.png'} alt="carrito" />
                        </div>
                        <Link to="/carrito">
                            <button style={{ borderRadius: 10, backgroundColor: '#133840', color: '#ffffff' }}>
                                <i className="fas fa-cart-plus" />
                                Carrito</button>
                        </Link>
                        <br />
                        <br />
                        <br />
                        <br />

                        <p><b>Monto actual</b></p>
                        <p>monto: </p>
                        <Link to="/checkout">
                            <button style={{ borderRadius: 10, backgroundColor: '#133840', color: '#ffffff' }}>
                                Pagar
                            </button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
