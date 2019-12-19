import React, { Component } from 'react'
import ColumnasDelCarrito from './ColumnasDelCarrito';
import CarritoVacio from './CarritoVacio';
import {ContextConsumer} from '../../Context';
import ListaCarrito from './ListaCarrito';
import TotalCarrito from './TotalCarrito';

export default class Carrito extends Component {
    render() {
        return (
            <section>
                <ContextConsumer>
                    {value => {
                        const {carrito} = value;
                        if(carrito.length > 0 ){
                            return(
                                <React.Fragment>
                                <h3>Su carrito de Comidas</h3>
                                <ColumnasDelCarrito/>
                                <ListaCarrito value = {value}/>
                                <TotalCarrito value = {value}/>
                                </React.Fragment>
                            );
                        }else{
                            return (<CarritoVacio/>);
                        }
                    }}

                </ContextConsumer>
            </section>
        )
    }
}
