import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { Context } from "./Example4";

export const CounterHandlers = observer(() => {
    const store = useContext(Context);
    const [valueOneSteps, setValueOneSteps] = useState([]);
    const [valueTwoSteps, setValueTwoSteps] = useState([]);
    const [sumSteps, setSumSteps] = useState([]);

    const changeValOneHandler = () => {
        store.changeValue1();
        setValueOneSteps([...valueOneSteps, store.value1]);
        setSumSteps([...sumSteps, store.valSum]);
    };

    const changeValTwoHandler = () => {
        store.changeValue2();
        setValueTwoSteps([...valueTwoSteps, store.value2]);
        setSumSteps([...sumSteps, store.valSum]);
    };

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
});
