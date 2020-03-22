import React from "react";
import { inject, observer } from "mobx-react";
import { observable, action } from "mobx";
import { useInstance } from "../hooks/useInstance";

class CounterHandlersViewModel {
    @observable valueOneSteps = [];
    @observable valueTwoSteps = [];
    @observable sumSteps = [];

    constructor(store) {
        this.store = store;
    }

    @action changeValOneHandler = () => {
        this.store.changeValue1();
        this.valueOneSteps.push(this.store.value1);
        this.sumSteps.push(this.store.valSum);
    };

    @action changeValTwoHandler = () => {
        this.store.changeValue2();
        this.valueTwoSteps.push(this.store.value2);
        this.sumSteps.push(this.store.valSum);
    };
}

export const CounterHandlers = inject("store")(
    observer(props => {
        const {
            valueOneSteps,
            valueTwoSteps,
            sumSteps,
            changeValOneHandler,
            changeValTwoHandler
        } = useInstance(new CounterHandlersViewModel(props.store));

        return (
            <div>
                <h3>Handlers</h3>
                <div>
                    <button onClick={changeValOneHandler}>Change Value 1</button>
                </div>
                <div>
                    <button onClick={changeValTwoHandler}>Change Value 2</button>
                </div>
                <div className="mt-4">
                    <div>Value 1 Steps: {valueOneSteps.join(", ")}</div>
                    <div>Value 2 Steps: {valueTwoSteps.join(", ")}</div>
                    <div>Sum Steps: {sumSteps.join(", ")}</div>
                </div>
            </div>
        );
    })
);
