import React from 'react'
import {Link} from 'react-router-dom';

export default function TotalCarrito({value}) {
    
    const{carritoSubTotal, carritoTotal, borrarCarrito}=value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 
                    text-capitalize text-right">
                        <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3
                        px-5" type="button" onClick={()=>{
                            borrarCarrito();
                        }}>vaciar el carrito</button>
                        </Link>
                        <h5>
                            <span>
                                subtotal: {carritoSubTotal}
                            </span>
                        </h5>
                        <h5>
                            <span>
                                total: {carritoTotal}
                            </span>
                        </h5>
                    </div>
                </div> 
            </div>
        </React.Fragment>
    )
}