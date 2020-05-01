import React from "react";
import { observable, action, computed } from "mobx";
import { Provider, inject, observer } from "mobx-react";

/*===============
STORE
===============*/

class Store {
    // STATE
    @observable value = 0;

    // COMPUTED VALUE
    @computed get doubledValue() {
        return this.value * 2;
    }

    // ACTION
    @action changeValue = () => {
        this.value++;
    };
}

/*===============
APP ENTRY POINT
===============*/

const store = new Store();

export const Example2 = ({ name }) => {
    return (
        <Provider store={store}>
            {name}
            <ValueControl />
        </Provider>
    );
};

/*===============
COMPONENT USING STORE (REACTION)
===============*/

const ValueControl = inject("store")(
    observer((props) => {
        return (
            <div>
                <button onClick={props.store.changeValue}>Change Value</button>
                <div>Value: {props.store.value}</div>
                <div>Doubled Value: {props.store.doubledValue}</div>
            </div>
        );
    })
);
