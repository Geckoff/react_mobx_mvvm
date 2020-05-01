import React from "react";
import { observable, action } from "mobx";
import { Provider, inject, observer } from "mobx-react";

/*===============
STORE
===============*/

class Store {
    @observable value = 0;

    @action changeValue = () => {
        this.value++;
    };
}

/*===============
APP ENTRY POINT
===============*/

const store = new Store();

export class Example2 extends React.Component {
    render = () => (
        <Provider store={store}>
            <ValueControl />
        </Provider>
    );
}

/*===============
COMPONENT USING STORE
===============*/

@inject("store")
@observer
class ValueControl extends React.Component {
    render = (props) => (
        <div>
            <button onClick={props.store.changeValue}>Change Value</button>
            <div>Value: {props.store.value}</div>
        </div>
    );
}
