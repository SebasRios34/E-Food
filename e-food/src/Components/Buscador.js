import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'refrescos'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('esta buscando: ' + this.state.value);
        {/*<Link to="/detalleProducto"></Link>*/}
        if(this.state.value == 'combos'){
        }
        event.preventDefault();
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
            <label>
            elija una opcion:  
                <select className="ml-1 mr-1" value={this.state.value} onChange={this.handleChange}>
                    <option  value="combos">Combos</option>
                    <option  value="refrescos">Refrescos</option>
                    <option  value="postres">Postres</option>
                    <option  value="algoMas">algo mas</option>
                </select>
                <div >
                    <div className="input-group">
                        <input 
                            id="buscadorInput" 
                            name="buscadorInput" 
                            className="form-control" 
                            type="text"
                            value={this.state.value}
                            onChange={this.handleInput}>
                        </input> 
                    </div>
                        <input type="submit" value="Submit" />
                </div>
            </label>
            
        </form>
        );
    
    }
}

export default withRouter(Buscador)
