import React, { Component } from 'react'
import {ContextConsumer} from '../Context';
import {Link } from 'react-router-dom';



export default class DetalleProducto extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            radio: 'option1',
            cantidad: ""
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Valor del radio: ' + this.state.radio);
        console.log('valor de cantidad: ' + this.state.cantidad);

        let arreglo ={
            'radio': this.state.radio,
            'cantidad': this.state.cantidad
        }
        console.log(arreglo);
    }

    handleOptionChange(event) {
        
        console.log(event.target);

        const {name, value} = event.target;
        this.setState({
            selectedOption: event.target.value,
            [name]:value
        });
        console.log(event.target.value);
    }
    

    render() {
        return (
            <ContextConsumer>
                {(value) =>{
                    const {id, nombreProducto, contenido, cant} = value.detalleProducto;
                    const {pequenio, mediano, grande} = value.precios;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center">
                                    <h2>
                                        Producto: {nombreProducto}
                                    </h2>
                                </div>
                            </div>
                            {/*info prod*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    {/*esto deberia de tener una imagen aqui */}
                                    <div>
                                        <h5 className="text-title text-uppercase text-muted mt-3 mb-2 ">
                                            Contenido: 
                                        </h5>
                                        <h6 className="row">{contenido}</h6>
                                    </div>
                                    <br/>
                                    {/*precios*/}
                                    <div className="card card-body">
                                        <h5>Precios: </h5>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" value="option1" 
                                                            checked={this.state.selectedOption === 'option1'} 
                                                            onChange={this.handleOptionChange} />
                                                    Pequeño - {pequenio}
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" value="option2" 
                                                            checked={this.state.selectedOption === 'option2'} 
                                                            onChange={this.handleOptionChange} />
                                                        Mediano - {mediano}
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" value="option3" 
                                                            checked={this.state.selectedOption === 'option3'} 
                                                            onChange={this.handleOptionChange} />
                                                    Grande - {grande}
                                                </label>
                                                <br/>
                                            </div>
                                            {/*cantidad de platos a carrito*/}
                                                <h6> Cantidad: </h6>
                                                <input type="int" name="cantidad"  className="col-md-2" onChange={this.handleOptionChange}></input>
                                                <input type="submit" value="Agregar"></input>
                                            <div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ContextConsumer>
        )
    }
}
