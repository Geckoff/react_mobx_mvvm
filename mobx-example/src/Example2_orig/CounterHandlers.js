import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Context } from "./Example2";

export const CounterHandlers = observer(() => {
    const store = useContext(Context);

    return (
        <div>
            <h3>Handlers</h3>
            <div>
                <button onClick={store.changeValue1}>Change Value 1</button>
            </div>
            <div>
                <button onClick={store.changeValue2}>Change Value 2</button>
            </div>
        </div>
    );
});
