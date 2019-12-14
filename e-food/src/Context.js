import React, { Component } from 'react'
import {arrProductos, detalleProducto, precios} from './data';


const Productos = React.createContext();
//viene con dos componentes
//Provider
//Consumer

class ContextProvider extends Component {
    
    state = {
        productos:[],
        detalleProducto:detalleProducto,
        precios:precios,
        carrito:[]
    };

    componentDidMount(){
        this.setProductos();
    }

    setProductos =()=>{
        let productosTemp = [];
        arrProductos.forEach(item => {
            const itemSolito = {...item};
            productosTemp = [...productosTemp,itemSolito];
            
        })

        this.setState(()=>{
            return {productos:productosTemp}
        })
    };

    getItem = (id) => {
        const producto = this.state.productos.find(item => item.id === id);
        return producto;
    }

    manejoDetalle = id =>{
        const producto = this.getItem(id);
        this.setState(() =>{
            return {detalleProducto:producto}
        })
    };

    agregarAlCarrito =(id)=>{
        let productosTemp = [...this.state.productos];
        const index = productosTemp.indexOf(this.getItem(id));

        const producto = productosTemp[index];
        producto.enCarrito = true;

        this.setState(()=>{
            return {productos: productosTemp, carrito:[...this.state.carrito, 
                producto]
            };
        },()=>{console.log(this.state)});
    };

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
