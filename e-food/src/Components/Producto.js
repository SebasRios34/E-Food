import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Producto extends Component {
    render() {

        const {id, nombreProducto, contenido, enCarrito} = this.props.product;

        return (
            <div className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className = "card">
                    <div className = "img-container p-5" 
                        onClick={ ()=> console.log ('aqui se va a redirigir al producto completo')}
                        > 
                        <Link to="/detalleProducto"><p>{contenido}</p></Link>
                        <button classsName="cart-btn" 
                            disabled = 
                            {enCarrito?true : false} onClick={()=> 
                            console.log('se quiere añadir al carrito cuchau')}>
                            {enCarrito?
                            (<p ClassName="text-capitaliza mb-0 " 
                            disabled> 
                            en el carrito
                            </p>) : 
                            (<i className="fas fa-cart-plus"></i>)}
                            Agregar
                        </button>
                    </div>
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
