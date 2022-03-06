import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            inputValue: ''
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    onChangeValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }



    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.inputValue}</h1>
                </div>
                <div>
                    <h1> {this.state.count} </h1>
                </div>
                <div>
                    <button onClick={this.increment}>increment</button>

                </div>
                <div>
                    <button onClick={this.decrement}>Decrement</button>

                </div>
                <input type="text" value={this.state.inputValue} onChange={this.onChangeValue} />
            </div>
        )
    }
}

export default ClassCounter