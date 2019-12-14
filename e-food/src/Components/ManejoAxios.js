import React, { Component } from 'react'

export default class ManejoAxios extends Component {
    
    state ={
        opciones:[]
    }

    getOpciones(){
        axios.get(url);
    }
    render() {
        return (
            <div>
                mostrar lista combos
            </div>
        )
    }
}
