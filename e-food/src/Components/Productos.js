import React, { Component } from 'react'
import {ContextConsumer} from '../Context';
import Producto from './Producto';

export default class Productos extends Component {
    render() {
        return (

            <div className ="py-5">
                <div className="container">   
                    <div className="row">
                        <ContextConsumer>
                            {(value)=>{
                            return value.productos.map( product =>{
                                return <Producto key = {product.id} 
                                product={product}/>
                            })
                            }}
                        </ContextConsumer>
                    </div>
                </div>
            </div>
        )
    }
}
