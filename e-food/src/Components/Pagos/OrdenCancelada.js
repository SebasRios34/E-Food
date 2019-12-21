import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class OrdenCancelada extends Component {
    render() {
        return (
            <div>
                <p>
                    Su orden ha sido cancelada con exito.<br/>
                    Esperamos que tenga un lindo dia y vuelva a utilizar nuestra aplicacion en un futuro cercano <br/>
                    <br/>
                    Pulse el boton para volver al inicio de la aplicacion
                </p>

                <Link to="/">
                    <button>Inicio</button>
                </Link>
            </div>
        )
    }
}
