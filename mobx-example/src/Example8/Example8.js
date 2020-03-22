import React from "react";
import { observable, action } from "mobx";
import { useInstance } from "../hooks/useInstance";
import { observer } from "mobx-react";

class ExampleViewModel {
    @observable cars = [
        {
            name: "BMW",
            maxSpeed: 200,
            type: "hatchback"
        },
        {
            name: "Audi",
            maxSpeed: 250,
            type: "suv"
        }
    ];

    @action changeAudiSpeed = () => {
        this.cars[1].maxSpeed = this.cars[1].maxSpeed + 1;
    };
}

export const Example8 = observer(({ name }) => {
    const exampleViewModel = useInstance(new ExampleViewModel());

    return (
        <div>
            {name}
            <button onClick={exampleViewModel.changeAudiSpeed}>Change Audi Speed</button>
            <div>{exampleViewModel.cars[1].name}</div>
            <div>{exampleViewModel.cars[1].maxSpeed}</div>
            <div>{exampleViewModel.cars[1].type}</div>
        </div>
    );
});
