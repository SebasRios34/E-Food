import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ContextConsumer } from '../Context';

export default class Producto extends Component {
    render() {

        const {id, nombreProducto, contenido, enCarrito} = this.props.product;

        return (
            <div className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className = "card">
                    <ContextConsumer>
                        {(value) => (
                            <div className = "img-container p-5" 
                            onClick={ ()=> 
                            value.manejoDetalle(id)}
                            > 
                            <Link to="/detalleProducto"><p>{contenido}</p></Link>
                            {/* 
                            <button classsName="cart-btn" 
                                disabled = 
                                {enCarrito?true : false} onClick={()=> {
                                    value.agregarAlCarrito(id)}}>
                                {enCarrito?
                                (<p ClassName="text-capitaliza mb-0 " 
                                disabled> 
                                en el carrito
                                </p>) : 
                                (<i className="fas fa-cart-plus"></i>)}
                                Agregar
                            </button>
                                */}
                            
                        </div>
                        )}
                        
                    </ContextConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className ="align-self-center mb-0">{id}</p>
                        <h6 className="font-bold mb-0">
                            {nombreProducto}</h6>
                    </div>    

                </div>
            </div>
        )
    }
}

Producto.propType ={
    producto:PropTypes.shape({
        id:PropTypes.number,
        nombreProducto:PropTypes.string,
        contenido: PropTypes.string,
        enCarrito: PropTypes.bool
    }).isRequired
};
