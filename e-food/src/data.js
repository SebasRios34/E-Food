import React, { Component } from "react";
import axios from 'axios';



export const precios = {
    pequenio: 1100,
    mediano: 1350,
    grande: 1520
}

export const arrProductos = [
    {
        id: 1,
        nombreProducto: "combo#1",
        contenido: "papas medianas, sandwich de pollo, tocineta, tomate y queso" +
            " refresco mediano",
        enCarrito: false,
        cant: 0,
        count: 0,
        price: 1300,
        total: 0
    },
    {
        id: 2,
        nombreProducto: "combo#2",
        contenido: "triple quesoburguesa con tocineta y queso suizo",
        enCarrito: false,
        cant: 0,
        count: 1,
        price: 7,
        total: 0
    }, {
        id: 3,
        nombreProducto: "combo#3",
        contenido: "wrap de pollo bien saludable para los chicos fit, con queso parmesano" +
            " y bebida cero calorias endulzada con splenda",
        enCarrito: false,
        cant: 0,
        count: 1,
        price: 1520,
        total: 0
    }


]

export var detalleProducto = {
    id: 1,
    nombreProducto: "combo#1",
    contenido: "papas medianas, sandwich de pollo, tocineta, tomate y queso" +
        " refresco mediano",
    enCarrito: false,
    cant: 0,
    count: 1,
    price: 1100,
    total: 0
}

export const Producto = [{}]

export default class data extends Component{
    async getProductos() {
        //const obj = await 
        await axios.get('https://localhost:44360/api/Producto/')
            .then(res => {
                res.data = JSON.parse(res.data);
                Producto = res.data;
                console.table(Producto);
            })
        //this.setState({productos:obj.data});
    }

    componentDidMount(){
        this.getProductos();
    }

    render(){
        console.table(Producto);
        return(<div>aaa</div>)
    }
}

