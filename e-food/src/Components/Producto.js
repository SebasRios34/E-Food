import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetalleProducto from './DetalleProducto';
import { ContextConsumer } from '../Context';
import axios from 'axios';
import dataNew from '../dataNew';

export default class Producto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contenido: '',
            productos: [],
            detalleProducto: detalleProducto
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInputValue(e) {
        this.setState({
            contenido: e.target.value
        });

    }

    handleSubmit() {
        console.log('Your input value is: ' + this.state.contenido);
    }

    async getProductos() {
        //const obj = await 
        await axios.get('https://localhost:44360/api/Producto/')
            .then(res => {
                res.data = JSON.parse(res.data);
                const productos = res.data;
                this.setState({ productos });
                console.table(productos);
            })
        //this.setState({productos:obj.data});
    }

    getItem = (id) => {
        const producto = this.state.productos.find(item => item.CodigoProducto === id);
        return producto;
    }

    // manejoDetalle = id => {
    //     const producto = this.getItem(id);
    //     this.setState(() => {
    //         return { DetalleProducto: producto }
    //     })
    // };

    setProductos = () => {
        const temporal = [];
        this.state.productos.forEach(item => {
            const mostrarItem = { ...item };
            temporal = { ...temporal, mostrarItem };
        })
        this.setState(() => {
            return { productos: temporal }
        })
    }

    componentDidMount() {
        this.getProductos();
        this.setProductos();
    }

    render() {

        const { id, nombreProducto, contenido, enCarrito } = this.props.product;

        return (
            <div>
    {this.state.productos.map(x => <div className="col-10 mx-auto col-md-6 my-3">
        <div className="card" style={{ marginLeft: 15 }}>
            <ContextConsumer>
                {(value) => (
                    <div className="img-container p-5"
                        onClick={() =>
                            value.manejoDetalle(id)}
                    >


                        <Link to="/detalleProducto"><p>{x.Contenido}</p></Link>

                        {/* 
                <button classsName="cart-btn" 
                    disabled = 
                    {enCarrito?true : false} onClick={()=> {
                        value.agregarAlCarrito(id)}}>
                    {enCarrito?
                    (<p ClassName="text-capitaliza mb-0 " 
                    disabled> 
                    en el carrito
                    </p>) : 
                    (<i className="fas fa-cart-plus"></i>)}
                    Agregar
                </button>
                    */}

                    </div>
                )}

            </ContextConsumer>

             <div className="card-footer d-flex justify-content-between">
                 <p className="align-self-center mb-0">{x.CodigoProducto}</p>
                 <h6 className="font-bold mb-0">
                     {x.NombreProducto}</h6>
             </div>

         </div>
     </div>)}
</div>
//     )
            // <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            //     <div className="card">
            //         <ContextConsumer>
            //             {(value) => (
            //                 <div className="img-container p-5"
            //                     onClick={() =>
            //                         value.manejoDetalle(id)}
            //                 >
            //                     <Link to="/detalleProducto"><p>{contenido}</p></Link>
            //                     <button classsName="cart-btn"
            //                         disabled=
            //                         {enCarrito ? true : false} onClick={() => {
            //                             value.agregarAlCarrito(id)
            //                         }}>
            //                         {enCarrito ?
            //                             (<p ClassName="text-capitaliza mb-0 "
            //                                 disabled>
            //                                 en el carrito
            //                     </p>) :
            //                             (<i className="fas fa-cart-plus"></i>)}
            //                         Agregar
            //                 </button>
            //                 </div>
            //             )}

            //         </ContextConsumer>
            //     </div>
            // </div >
            // <ContextConsumer>
            //     {(value) => (
            //         <div className="img-container p-5"
            //             onClick={() =>
            //                 value.manejoDetalle(id)}
            //         >
            //             <Link to="/detalleProducto"><p>{contenido}</p></Link>
            //             <button classsName="cart-btn"
            //                 disabled=
            //                 {enCarrito ? true : false} onClick={() => {
            //                     value.agregarAlCarrito(id)
            //                 }}>
            //                 {enCarrito ?
            //                     (<p ClassName="text-capitaliza mb-0 "
            //                         disabled>
            //                         en el carrito
            //                     </p>) :
            //                     (<i className="fas fa-cart-plus"></i>)}
            //                 Agregar
            //                 </button>
            //         </div>
            //     )}

            // </ContextConsumer>
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

const detalleProducto = {
    id: 1,
    nombreProducto: "combo#1",
    contenido: "papas medianas, sandwich de pollo, tocineta, tomate y queso" +
        " refresco mediano",
    enCarrito: false,
    cant: 0,
    count: 0,
    price: 1100,
    total: 0
}

Producto.propType = {
    producto: PropTypes.shape({
        id: PropTypes.number,
        nombreProducto: PropTypes.string,
        contenido: PropTypes.string,
        enCarrito: PropTypes.bool
    }).isRequired
};
