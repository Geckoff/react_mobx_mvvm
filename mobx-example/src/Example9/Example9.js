import React from "react";
import { observable, action } from "mobx";
import { useInstance } from "../hooks/useInstance";
import { observer } from "mobx-react";

class ExampleViewModel {
    @observable car = {
        name: "BMW",
        specs: {
            engine: {
                volume: 2,
                cyl: 6
            },
            speed: {
                max: 250,
                zeroTo60: 5
            }
        }
    };

    @action changeBmwMaxSpeed = () => {
        this.car.specs.speed.max = this.car.specs.speed.max + 1;
    };
}

export const Example9 = observer(({ name }) => {
    const exampleViewModel = useInstance(new ExampleViewModel());

    return (
        <div>
            {name}
            <button onClick={exampleViewModel.changeBmwMaxSpeed}>Change Audi Speed</button>
            <div>{exampleViewModel.car.name}</div>
            <div>{exampleViewModel.car.specs.speed.max}</div>
        </div>
    );
});
