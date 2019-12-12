import React, { Component } from 'react'
import {Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export default class Nav extends Component {
    render() {
        return (
            <body>
                <div> 
                    <nav className="navbar navbar-dark bg-dark">
                        <span className="navbar-brand mb-0 h1">
                                <Link to='/' className="nav-link">E-Commerce Food
                                </Link>
                        </span>
                        <span className="navbar-brand lm-auto h1">
                                <Link to='/productos' className="nav-link">productos
                                </Link>
                        </span>
                    </nav>
                </div>
                <div className="col-md-4">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Opciones
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Combos</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Refrescos</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">no se que opciones puede ver el cliente aca</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className="col-md-4 row">
                        <div className="input-group">
                            <input id="buttondropdown" name="buttondropdown" className="form-control" type="text"></input> 
                        </div>
                        <Link to="/producto">
                        <button>Buscar</button>
                        </Link>
                    </div>
            </body>
        )
    }
}
