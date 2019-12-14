import React from 'react'

export default function ItemCarrito({item, value}) {

    const {id, nombreProducto, precio, cant, count, total } = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                {/*aqui podria ir una imagen */}

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg">Producto : </span>
                {nombreProducto}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg">Precio : </span>
                {precio}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onCLick={()=>{
                            decrement(id);
                        }}>
                            -
                        </span>
                        <span className="btn btn-black mx-1"> {count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>{
                            increment(id);
                        }}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="btn btn-green mx-1" onClick={
                    ()=>{
                        removeItem();
                    }
                }> eliminar</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong >total : </strong>
                {total}
            </div>
        </div>
    );
}
