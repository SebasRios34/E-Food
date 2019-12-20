import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ContextConsumer } from '../Context';
import axios from 'axios';

export default class Producto extends Component {

    constructor(props){
        super(props);
        this.state = {
            productos: []
        }
    }
    // state = {
    //     productos: []
    // };

    async getProductos() {
        //const obj = await 
        await axios.get('https://localhost:44360/api/Producto/')
            .then(res => {
                res.data = JSON.parse(res.data);
                const productos = res.data;
                this.setState({ productos });
                console.table(res.data);
                console.table(productos);
            })
        //this.setState({productos:obj.data});
    }

    componentDidMount() {
        this.getProductos();
    }

    render() {

        const { id, nombreProducto, contenido, enCarrito } = this.props.product;

        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {this.state.productos.map(x =>
                            <div className="col-md-4">

                                <div className="card-header">{x.CodigoProducto} - {x.NombreProducto}</div>

                                <div className="card-body">
                                    <Link className="card-text" to="/detalleProducto">{x.Contenido}</Link>
                                </div>

                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}
// <div>
//     {this.state.productos.map(x => <div className="col-10 mx-auto col-md-6 my-3">
//         <div className="card" style={{ marginLeft: 15 }}>
//             <ContextConsumer>
//                 {(value) => (
//                     <div className="img-container p-5"
//                         onClick={() =>
//                             value.manejoDetalle(id)}
//                     >


//                         <Link to="/detalleProducto"><p>{x.Contenido}</p></Link>

//                         {/* 
//                 <button classsName="cart-btn" 
//                     disabled = 
//                     {enCarrito?true : false} onClick={()=> {
//                         value.agregarAlCarrito(id)}}>
//                     {enCarrito?
//                     (<p ClassName="text-capitaliza mb-0 " 
//                     disabled> 
//                     en el carrito
//                     </p>) : 
//                     (<i className="fas fa-cart-plus"></i>)}
//                     Agregar
//                 </button>
//                     */}

//                     </div>
//                 )}

//             </ContextConsumer>

//             <div className="card-footer d-flex justify-content-between">
//                 <p className="align-self-center mb-0">{x.CodigoProducto}</p>
//                 <h6 className="font-bold mb-0">
//                     {x.NombreProducto}</h6>
//             </div>

//         </div>
//     </div>)}
// </div>
//     )

Producto.propType = {
    producto: PropTypes.shape({
        id: PropTypes.number,
        nombreProducto: PropTypes.string,
        contenido: PropTypes.string,
        enCarrito: PropTypes.bool
    }).isRequired
};
