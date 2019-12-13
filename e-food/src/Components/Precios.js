import React, { Component } from 'react'

export default class Precios extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="radio">
                    <label>
                        <input type="radio" value="option1" 
                                    checked={this.state.selectedOption === 'option1'} 
                                    onChange={this.handleOptionChange} />
                        Pequeño - 1100
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="option2" 
                                    checked={this.state.selectedOption === 'option2'} 
                                    onChange={this.handleOptionChange} />
                        Mediano - 1350
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="option3" 
                                    checked={this.state.selectedOption === 'option3'} 
                                    onChange={this.handleOptionChange} />
                        Grande - 1520
                    </label>
                    </div>
                </form>
            </div>
        )
    }
}
