import React, { Component } from 'react'
import {Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <body>
                <div> 
                    <nav className="navbar navbar-dark bg-dark">
                        <span class="navbar-brand mb-0 h1">
                                <Link to='/' className="nav-link">E-Commerce Food
                                </Link>
                        </span>
                        <span class="navbar-brand lm-auto h1">
                                <Link to='/productos' className="nav-link">productos
                                </Link>
                        </span>
                    </nav>
                </div>
            </body>
        )
    }
}
