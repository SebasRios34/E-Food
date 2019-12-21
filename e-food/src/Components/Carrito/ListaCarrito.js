import React from 'react'
import ItemCarrito from './ItemCarrito';

export default function ListaCarrito({value}) {

    const {carrito} = value;
    console.log(value, carrito);

    return (
        <div className="container-fluid">
            {carrito.map(item=>{
                return <ItemCarrito key={item.id} item = {item} value = {value}/>
            })}

        </div>
    )
}
