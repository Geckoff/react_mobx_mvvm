import React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react"

@observer
class NestedTest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Nested Test rerender")
        return <div>Nested Test. Valu2: {this.props.value2}</div>
    }
}

@observer 
class Example13Component extends React.Component {
    @observable value = 1;
    @observable value2 = 2;

    constructor(props) {
        super(props);
    }

    /**
     * Incrementing value1 causes rerender only Example13Component (take a look at console in the browser)
     */
    incrementValue1 = () => {
        this.value++
    }

     /**
     * Incrementing value1 causes rerender of both Example13Component and NestedTest
     * (take a look at console in the browser)
     */
    incrementValue2 = () => {
        this.value2++
    }

    render() {
        console.log("Example1 rerender")
        return <div>
            {this.value}
            <button onClick={this.incrementValue1}>Increment</button>
            <button onClick={this.incrementValue2}>Increment Value2</button>
            <NestedTest value2={this.value2}/>
        </div>
    }
}

export const Example13 = Example13Component;


