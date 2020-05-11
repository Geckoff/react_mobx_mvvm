import React from "react";

class NestedTest extends React.Component {
    render() {
        console.log("Nested Test rerender")
        return <div>Nested Test</div>
    }
}

export class Example12 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }

    buttonHandler = () => {
        this.setState({
            value: this.state.value + 1
        })
    } 

    render() {
        console.log("Example1 rerender")
        return <div>
            {this.state.value}
            <button onClick={this.buttonHandler}>Increment</button>
            <NestedTest/>
        </div>
    }
}


