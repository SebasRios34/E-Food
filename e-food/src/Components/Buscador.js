import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DetalleProducto from './DetalleProducto';

export default class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {dropdown: 'refrescos',
                      Buscar: ""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        console.log(event.target);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        //this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Valor del dropdown: ' + this.state.dropdown);
        console.log('Valor del input: ' + this.state.Buscar);
        let arreglo = {
            "Dropdown": this.state.dropdown,
            "Buscar": this.state.Buscar
        }
        console.log(arreglo);

        //se tira el array y se manda a la base de datos.
        // implementar un post para retornar si encontro un objeto con la bd
        // <Link to="/detalleProducto">
            
        // </Link>
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
            elija una opcion:  
                <select name="dropdown" className="ml-1 mr-1" value={this.state.dropdown} onChange={this.handleChange}>
                    <option value="combos">Combos</option>
                    <option value="refrescos">Refrescos</option>
                    <option value="postres">Postres</option>
                    <option value="algoMas">algo mas</option>
                </select>
                <div >
                    <div className="input-group">
                        <input id="buttondropdown" name="Buscar" className="form-control" type="text" onChange={this.handleChange}></input> 
                    </div>
                        <input type="submit" value="Submit" />
                </div>
            </label>
            
        </form>
        );
    
    }
}
