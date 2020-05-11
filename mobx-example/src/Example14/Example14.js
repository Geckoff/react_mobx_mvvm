import React, { useMemo } from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import { useInstance } from "../hooks/useInstance";

export const NestedTest = observer(({ value2 }) => {
    console.log("Nested Test rerender");
    return <div>Nested Test. Valu2: {value2}</div>;
});

class Example14ViewModel {
    @observable value1 = 1;
    @observable value2 = 2;

    /**
     * Incrementing value1 causes rerender only Example13Component (take a look at console in the browser)
     */
    @action incrementValue1 = () => {
        this.value1++;
    };

    /**
     * Incrementing value1 causes rerender of both Example13Component and NestedTest
     * (take a look at console in the browser)
     */
    @action incrementValue2 = () => {
        this.value2++;
    };

    @computed get variable() {
        console.log("variable recalculated");
        return this.value1 + " HEAVY CALCS"   
    }
}

export const Example14 = observer(() => {
    
    const { value1, value2, incrementValue1, incrementValue2, variable } = useInstance(
        new Example14ViewModel()
    );

    // const variable = useMemo(() => {
    //     console.log("variable recalculated");
    //     return value1 + " HEAVY CALCS";
    // }, [value1]);

    // const variable = value1 + " HEAVY CALCS"

    return (
        <div>
            <div>value dependant on value1: {variable}</div>
            {value1}
            <button onClick={incrementValue1}>Increment</button>
            <button onClick={incrementValue2}>Increment Value2</button>
            <NestedTest value2={value2} />
        </div>
    );
});
