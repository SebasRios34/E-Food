import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OrdenExitosa extends Component {
    render() {
        return (
            <div>
                <p>
                    muchas gracias por haber utilizado nuestra aplicacion.<br/>
                    su comida sera enviada pronto. <br/>
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
