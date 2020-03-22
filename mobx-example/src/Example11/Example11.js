import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { Col, Row } from "reactstrap";
import { Input, InputViewModel } from "./Input";

class CarsViewModel {
    @observable cars = [
        { name: "BMW", speed: 250 },
        { name: "Audi", speed: 200 },
        { name: "VW", speed: 180 }
    ];
    @observable selectedCar = this.cars[0];

    @action selectCar = car => {
        this.selectedCar = car;
    };
}

const Cars = observer(({ carsViewModel }) => (
    <div>
        {carsViewModel.cars.map((car, i) => (
            <div className="mb-2">
                <span className="mr-2">
                    {car.name} - {car.speed} kph
                </span>
                <button onClick={carsViewModel.selectCar.bind(carsViewModel, car)}>Select</button>
            </div>
        ))}
    </div>
));

class CarFormViewModel {
    carsViewModel;
    nameInputViewModel;
    speedInputViewModel;

    constructor(carsViewModel) {
        this.carsViewModel = carsViewModel;
        this.nameInputViewModel = new InputViewModel(() => this.carsViewModel.selectedCar, "name");
        this.speedInputViewModel = new InputViewModel(
            () => this.carsViewModel.selectedCar,
            "speed"
        );
    }
}

const CarForm = observer(({ carFormViewModel }) => (
    <div>
        Name: <Input inputViewModel={carFormViewModel.nameInputViewModel} />
        <br />
        Speed: <Input inputViewModel={carFormViewModel.speedInputViewModel} />
    </div>
));

const carsViewModel = new CarsViewModel();
const carFormViewModel = new CarFormViewModel(carsViewModel);

export const Example11 = ({ name }) => (
    <div>
        {name}
        <Row>
            <Col>
                <Cars carsViewModel={carsViewModel} />
            </Col>
            <Col>
                <CarForm carFormViewModel={carFormViewModel} />
            </Col>
        </Row>
    </div>
);
