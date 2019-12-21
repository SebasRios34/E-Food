import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: 'refrescos',
            Buscar: "",
            lineaComida: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }



    handleChange(event) {
        console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        //this.setState({value: event.target.value});
    }

    async getLineaComida() {
        //const obj = await 
        await axios.get('https://localhost:44360/api/LineaComida/')
            .then(res => {
                res.data = JSON.parse(res.data);
                const lineaComida = res.data;
                this.setState({ lineaComida });
                console.table(res.data);
                console.table(lineaComida);
            })
        //this.setState({productos:obj.data});
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



    handleInput(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }



    render() {

        return (
            <React.Fragment>
                {/* <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <label class="opt">
                                Elija una opcion:
                            <select name="dropdown" className="ml-1 mr-1" value={this.state.dropdown} onChange={this.handleChange}>
                                    {this.state.lineaComida.map((x,y) => <option key={y} value={y}>{x}</option>)}
                                </select>
                            </label>
                        </div>
                    </div>
                </form> */}
            </React.Fragment>
        );

    }
}

export default withRouter(Buscador)
