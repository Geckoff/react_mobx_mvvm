import React from "react";
import { observable, action } from "mobx";
import { useInstance } from "../hooks/useInstance";
import { observer } from "mobx-react";

class ExampleViewModel {
    @observable cars = ["Mercedes", "Audi", "BMW"];

    @action changeAudiName = () => {
        this.cars[1] = this.cars[1] + "1";
        console.log(this.cars);
    };
}

export const Example6 = observer(({ name }) => {
    const exampleViewModel = useInstance(new ExampleViewModel());

    return (
        <div>
            {name}
            <button onClick={exampleViewModel.changeAudiName}>Change Name</button>
            {exampleViewModel.cars.map(carName => (
                <div key={carName}>{carName}</div>
            ))}
        </div>
    );
});
