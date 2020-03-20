import React from "react";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

class CarViewModel {
    @observable maxSpeed = 250;

    @action changeMaxSpeed = () => {
        this.maxSpeed = this.maxSpeed + 1;
    };
}

// WORKING VIEW MODELS ARE IN Example10_options.js FILE
class SpeedDisplayViewModel {
    @observable speed;

    constructor(speed) {
        this.speed = speed;
    }

    @computed get kph() {
        return `${this.speed} km/h`;
    }

    @computed get mph() {
        return `${parseInt(this.speed / 1.6)} mi/h`;
    }
}

const carViewModel = new CarViewModel();
const speedDisplayViewModel = new SpeedDisplayViewModel(carViewModel.maxSpeed);

export const Example10 = observer(() => {
    return (
        <>
            <div>
				<h3>BMW</h3>
                <button onClick={carViewModel.changeMaxSpeed}>Change Speed</button>
                <SpeedDisplay speedDisplayViewModel={speedDisplayViewModel} />
            </div>
        </>
    );
});

const SpeedDisplay = observer(({ speedDisplayViewModel }) => (
    <div>
        <div>Imperial: {speedDisplayViewModel.mph}</div>
        <div>Metric: {speedDisplayViewModel.kph} </div>
    </div>
));
