import { observable, action, computed } from "mobx";

export class ProductionLineViewModel {
	@observable chassisAssembly = [];
	@observable bodyAssembly = [];
	@observable painting = [];
	carsStore;

	constructor(carsStore) {
		this.carsStore = carsStore;
	}

	@action moveToProduction = carsBatch => {
		this.carsStore.putCarsIntoProduction(carsBatch);
		this.chassisAssembly.push(carsBatch);
	};

	@action moveToBodyAssembly = carsBatch => {
		this.chassisAssembly = this.chassisAssembly.filter(
			chassisAssemblyCarsBatch => chassisAssemblyCarsBatch !== carsBatch
		);
		this.bodyAssembly.push(carsBatch);
	};

	@action moveToPainting = carsBatch => {
		this.bodyAssembly = this.bodyAssembly.filter(
			bodyAssemblyCarsBatch => bodyAssemblyCarsBatch !== carsBatch
		);
		this.painting.push(carsBatch);
	};

	@action sellCarsBatch = carsBatch => {
		this.painting = this.painting.filter(paintingCarsBatch => paintingCarsBatch !== carsBatch);
		this.carsStore.sellCars(carsBatch);
	};

	@computed get carsBatchesOrders() {
		return this.carsStore.carsBatchesOrders;
	}
}
