import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Context } from "./Example5";

export const CounterResults = observer(() => {
    const store = useContext(Context);

    return (
        <div>
            <h3>Results</h3>
            <div>Value 1: {store.value1}</div>
            <div>Value 2: {store.value2}</div>
            <div>Sum: {store.valSum}</div>
        </div>
    );
});
