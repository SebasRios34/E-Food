import React from 'react'

export default function ColumnasDelCarrito() {
    return (
        <div className="container-fluid text-center d-lg-block">
            <div className="row">
                {/*columna de productos */}
                <div className="col-10 mx-auto col-lg-2">
                    <p className ="text-uppercase">
                        Productos
                    </p>
                </div>
                {/*fin columna de productos*/}
                {/*comienzo columna  precio*/}
                <div className="col-10 mx-auto col-lg-2">
                    <p className ="text-uppercase">
                        Precio
                    </p>
                </div>
                {/* fin columna precio*/ }
                {/*Comienzo columna cantidad */}
                <div className="col-10 mx-auto col-lg-2">
                    <p className ="text-uppercase">
                        Cantidad
                    </p>
                </div>
                {/*fin columna cantidad */}
                {/*comienzo columna eliminar*/}
                <div className="col-10 mx-auto col-lg-2">
                    <p className ="text-uppercase">
                        eliminar
                    </p>
                </div>
                {/*fin columna eliminar */}
                {/*comienzo columna total*/}
                <div className="col-10 mx-auto col-lg-2">
                    <p className ="text-uppercase">
                        total
                    </p>
                </div>
                {/*fin columna total */}
            </div>
        </div>
    )
}

