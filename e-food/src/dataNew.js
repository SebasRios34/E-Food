import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class dataNew extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lineaComida: [],
    //         procesadorPago: [],
    //         producto: [],
    //         tiquetesDescuento: [],
    //         tiposPrecio: []
    //     }
    // }

    state = {
        lineaComida: [],
        procesadorPago: [],
        producto: [],
        tiquetesDescuento: [],
        tiposPrecio: []
    }

    async getLineaComida() {
        //const obj = await 
        await axios.get('https://localhost:44360/api/LineaComida/')
            .then(res => {
                res.data = JSON.parse(res.data);
                const lineaComida = res.data;
                this.setState({ lineaComida: lineaComida });
                console.table(lineaComida);
            })
        //this.setState({productos:obj.data});
    }

    async getProcesadorPago() {
        //const obj = await 
        await axios.get('https://localhost:44360/api/ProcesadorPago/')
            .then(res => {
                res.data = JSON.parse(res.data);
                const procesadorPago = res.data;
                this.setState({ procedorPago: procesadorPago });
                console.table(procesadorPago);
            })
        //this.setState({productos:obj.data});
    }

    async getProductos() {
        //const obj = await 
        await axios.get('https://localhost:44360/api/Producto/')
            .then(res => {
                res.data = JSON.parse(res.data);
                const productos = res.data;
                this.setState({ productos: productos });
                console.table(productos);
            })
        //this.setState({productos:obj.data});
    }

    async getTiquetesDescuento() {
        //const obj = await 
        var tiqueteDescuento;
        await axios.get('https://localhost:44360/api/TiqueteDescuento/')
            .then(res => {
                res.data = JSON.parse(res.data);
                tiqueteDescuento = res.data;
                this.setState({ tiqueteDescuento: tiqueteDescuento });
                console.table(this.state.tiquetesDescuento);
            })

    }

    async getTipoPrecio() {
        //const obj = await 
        await axios.get('https://localhost:44360/api/Producto/')
            .then(res => {
                res.data = JSON.parse(res.data);
                const tipoPrecio = res.data;
                this.setState({ tipoPrecio: tipoPrecio });
                console.table(tipoPrecio);
            })
        //this.setState({productos:obj.data});
    }

    componentDidMount() {
        this.getProcesadorPago();
        this.getLineaComida();
        this.getProductos();
        this.getTiquetesDescuento();
        this.getTipoPrecio();
    }

    render() {
        console.table(this.state.procesadorPago);
        return (<div></div>)
    }

}