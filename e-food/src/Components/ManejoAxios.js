import React, { Component } from 'react'

export default class ManejoAxios extends Component {
    
    state ={
        opciones:[]
    }

    async getOpciones(){
        const res = axios.get(url);
        this.setState({opciones:res.data});
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.opciones.map(opciones =>(
                        <div className ="col-md-4 p-2" key={opciones.id}>
                            <div className="card">
                                <div className="card-header">
                                    <p>
                                        {opciones.id}-{opciones.nombreProducto}
                                    </p>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {opciones.contenido}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))
                }
                
            </div>
        )
    }
}
