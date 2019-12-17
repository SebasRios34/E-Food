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
        carrito:[],
        carritoSubTotal: 0,
        carritoTotal: 0
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
        producto.count = 1;
        const price = producto.price;
        producto.total = price;
        this.setState(()=>{
            return {productos: productosTemp, carrito:[...this.state.carrito, 
                producto]
            };
        },()=>{this.agregarTotales();
        });
    };

    //metodos del carrito
    increment =(id)=>{
            let carritoTemp = [...this.state.carrito];
            const productoSeleccionado = carritoTemp.find(item => item.id === id);
            const index = carritoTemp.indexOf(productoSeleccionado);
            const producto = carritoTemp[index];
            producto.count = producto.count +1;
            producto.total = producto.count * producto.price;

            this.setState(()=>{
                return{
                    carrito:[...carritoTemp]
                }
            },()=>{
                this.agregarTotales();
            }
        )
    }

    decrement =(id)=>{
        let carritoTemp = [...this.state.carrito];
        const productoSeleccionado = carritoTemp.find(item => item.id === id);
        const index = carritoTemp.indexOf(productoSeleccionado);
        const producto = carritoTemp[index];
        producto.count = producto.count - 1;
        if(producto.count === 0){
            this.removeItem(id);
        }else{
            producto.total = producto.count * producto.price;
            this.setState(()=>{
                return{
                    carrito:[...carritoTemp]
                }
            },()=>{
                this.agregarTotales();
            }
            )
        }
    }

    removeItem = (id) =>{
        let productosTemp = [...this.state.productos];
        let carritoTemp = [...this.state.carrito];

        carritoTemp = carritoTemp.filter (item=>item.id !== id);

        const index = productosTemp.indexOf(this.getItem(id));
        let productoElim = productosTemp[index];
        productoElim.enCarrito = false;
        productoElim.count = 0;
        productoElim.total = 0;

        this.setState(()=>{
            return{
                carrito:[...carritoTemp],
                productos: [...productosTemp]
            };
        }, ()=>{
            this.agregarTotales();
        });
    
    };

    borrarCarrito =()=>{
        this.setState(()=>{
            return{ carrito:[]};
        },()=>{
            this.setProductos();
            this.agregarTotales();
        });
    }

    agregarTotales =()=>{
        let carritoSubTotal = 0;
        this.state.carrito.map(item =>(carritoSubTotal += item.total));
        const tempTax = carritoSubTotal * 0.1;
        const iva = parseFloat(tempTax.toFixed(2));
        const total = carritoSubTotal + iva;
        this.setState(()=>{
            return {
                carritoSubTotal:carritoSubTotal,
                carritoTax:iva,
                carritoTotal:total
            }
            
        })

    }


    render() {
        return (
            <Productos.Provider value={{
                ...this.state,
                manejoDetalle:this.manejoDetalle,
                agregarAlCarrito:this.agregarAlCarrito,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                borrarCarrito:this.borrarCarrito
            }}>
                {this.props.children}
            </Productos.Provider>
        )
    }
}

const ContextConsumer = Productos.Consumer;

export {ContextProvider, ContextConsumer};
