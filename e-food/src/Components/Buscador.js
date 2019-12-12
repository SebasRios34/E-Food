import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'refrescos'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('va a buscar: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
            elija una opcion:  
                <select className="ml-1 mr-1" value={this.state.value} onChange={this.handleChange}>
                    <option value="combos">Combos</option>
                    <option value="refrescos">Refrescos</option>
                    <option value="postres">Postres</option>
                    <option value="algoMas">algo mas</option>
                </select>
                <div >
                    <div className="input-group">
                        <input id="buttondropdown" name="buttondropdown" className="form-control" type="text"></input> 
                    </div>
                    
                        <input type="submit" value="Submit" />
                </div>
            </label>
            
        </form>
        );
    
    }
}
