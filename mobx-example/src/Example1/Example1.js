import React, { useContext } from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

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
const Context = React.createContext(store);

export const Example1 = ({ name }) => {
    return (
        <Context.Provider value={store}>
            {name}
            <ValueControl />
        </Context.Provider>
    );
};

/*===============
COMPONENT USING STORE (REACTION)
===============*/

//const store1 = new Store();

const ValueControl = observer(() => {
    const store = useContext(Context);
    return (
        <div>
            <button onClick={store.changeValue}>Change Value</button>
            <div>Value: {store.value}</div>
            <div>Doubled Value: {store.doubledValue}</div>
        </div>
    );
});
