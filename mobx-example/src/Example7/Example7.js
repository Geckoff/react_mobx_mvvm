import React from "react";
import { observable, action } from "mobx";
import { useInstance } from "../hooks/useInstance";
import { observer } from "mobx-react";

class ExampleViewModel {
    @observable car = {
        name: "BMW",
        maxSpeed: 200,
        type: "hatchback",
    };

    @action changeCarSpeed = () => {
        this.car.maxSpeed = this.car.maxSpeed + 1;
    };
}

export const Example7 = observer(({ name }) => {
    const exampleViewModel = useInstance(new ExampleViewModel());

    return (
        <div>
            {name}
            <button onClick={exampleViewModel.changeCarSpeed}>Change Speed</button>
            <div>{exampleViewModel.car.name}</div>
            <div>{exampleViewModel.car.maxSpeed}</div>
            <div>{exampleViewModel.car.type}</div>
        </div>
    );
});
