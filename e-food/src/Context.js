import React, { Component } from 'react'
import {arrProductos, detalleProducto} from './data';


const Productos = React.createContext();
//viene con dos componentes
//Provider
//Consumer

class ContextProvider extends Component {
    
    state = {
        productos:arrProductos,
        detalleProd:detalleProducto
    }

    manejoDetalle = () =>{
        console.log('buenas buenas desde  el manejo de detalle');
    }

    agregarAlCarrito =()=>{
        console.log('buenas buenas desde agregar al carrito');
    }

    render() {
        return (
            <Productos.Provider value={{
                ...this.state,
                manejoDetalle:this.manejoDetalle,
                agregarAlCarrito:this.agregarAlCarrito
            }}>
                {this.props.children}
            </Productos.Provider>
        )
    }
}

const ContextConsumer = Productos.Consumer;

export {ContextProvider, ContextConsumer};
