import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Pedido extends Component {
    render() {
        return (
            <div className="col-md-3 pedido">
                <div className="card card-body">
                    <h3 className="header">Pedido</h3>
                        <p>Ver carrito</p>
                        <Link to="/carrito">
                        <button>
                            <i className="fas fa-cart-plus"/>
                                Carrito</button>
                        </Link>
                <br/>
                <br/>
                <br/>
                <br/>

                    <p><b>Monto actual</b></p>
                    <p>monto: </p>
                    <Link to="/checkout">
                    <button>
                        Pagar
                    </button>
                    </Link> 
            </div>
        </div>
        )
    }
}
