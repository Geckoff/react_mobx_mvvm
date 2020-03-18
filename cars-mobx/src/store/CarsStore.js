import { observable, action } from "mobx";
import { carsBatchesModels, getNewCarBatch } from "./data/carsBatches";

export class CarsStore {
	@observable carsBatchesOrders = carsBatchesModels;
	@observable carsBatchesInProduction = [];
	@observable carsBatchesSold = [];

	@action orderCars = () => {
		this.carsBatchesOrders.push(getNewCarBatch());
	};

	@action putCarsIntoProduction = carsBatch => {
		this.carsBatchesOrders = this.carsBatchesOrders.filter(
			orderCarsBatch => orderCarsBatch !== carsBatch
		);
		this.carsBatchesInProduction.push(carsBatch);
	};

	@action sellCars = carsBatch => {
		this.carsBatchesInProduction = this.carsBatchesInProduction.filter(
			productionCarsBatch => productionCarsBatch !== carsBatch
		);
		this.carsBatchesSold.push(carsBatch);
	};

	@action clearSales = () => {
		this.carsBatchesSold = [];
	};
}
