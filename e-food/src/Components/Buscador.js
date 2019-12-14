import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DetalleProducto from './DetalleProducto';
import {withRouter} from 'react-router-dom';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {dropdown: 'refrescos',              
        Buscar: ""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
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

    handleInput(event){
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <div className="row">
            <div  className="col-10 mx-auto col-md-6 my-3">
            <label class = "opt">
            Elija una opcion:  
                <select  name="dropdown" className="ml-1 mr-1" value={this.state.dropdown} onChange={this.handleChange}>
                    <option >Seleccione</option>
                    <option value="combos">Combos</option>
                    <option value="refrescos">Refrescos</option>
                    <option value="postres">Postres</option>
                    <option value="algoMas">Ensaladas</option>
                    <option value="algoMas">Gaseosas</option>
                </select>
            </label>
            </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                    <div className="input-group">
                        <input id="buttondropdown" name="Buscar" className="form-control" type="text" onChange={this.handleChange}></input> 
                    </div>
                        <input type="submit" value="Buscar" />
                    </div>
                
        </div>
        </form>
        );
    
    }
}

export default withRouter(Buscador)
