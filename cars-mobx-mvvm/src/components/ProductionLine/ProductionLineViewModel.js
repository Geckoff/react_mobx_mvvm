import { observable, action, computed } from "mobx";
import { NotificationManager } from "react-notifications";
import { productionLineLoadingColors } from "../helpers/styleHelper";

export class ProductionLineViewModel {
	@observable chassisAssembly = [];
	@observable bodyAssembly = [];
	@observable painting = [];
	carsStore;

	constructor(carsStore) {
		this.carsStore = carsStore;
	}

	@action moveToProduction = carsBatch => {
		NotificationManager.info("Moved to Production");
		this.carsStore.putCarsIntoProduction(carsBatch);
		this.chassisAssembly.push(carsBatch);
	};

	@action moveToBodyAssembly = carsBatch => {
		NotificationManager.info("Moved to Body Assembly");
		this.chassisAssembly = this.chassisAssembly.filter(
			chassisAssemblyCarsBatch => chassisAssemblyCarsBatch !== carsBatch
		);
		this.bodyAssembly.push(carsBatch);
	};

	@action moveToPainting = carsBatch => {
		NotificationManager.info("Moved to Painting");
		this.bodyAssembly = this.bodyAssembly.filter(
			bodyAssemblyCarsBatch => bodyAssemblyCarsBatch !== carsBatch
		);
		this.painting.push(carsBatch);
	};

	@action sellCarsBatch = carsBatch => {
		NotificationManager.success("Sold!");
		this.painting = this.painting.filter(paintingCarsBatch => paintingCarsBatch !== carsBatch);
		this.carsStore.sellCars(carsBatch);
	};

	getStepColor = carBatches => {
		const { empty, superLight, light, medium, heavy, superHeavy } = productionLineLoadingColors;
		switch (true) {
			case carBatches.length === 0:
				return empty;
			case carBatches.length === 1:
				return superLight;
			case carBatches.length === 2:
				return light;
			case carBatches.length === 3:
				return medium;
			case carBatches.length === 4:
				return heavy;
			case carBatches.length > 4:
				return superHeavy;
			default:
				break;
		}
	};

	@computed get carsBatchesOrders() {
		return this.carsStore.carsBatchesOrders;
	}

	@computed get ordersStepColor() {
		return this.getStepColor(this.carsStore.carsBatchesOrders);
	}

	@computed get chassisAssemblyStepColor() {
		return this.getStepColor(this.chassisAssembly);
	}

	@computed get bodyAssemblyStepColor() {
		return this.getStepColor(this.bodyAssembly);
	}

	@computed get paintingStepColor() {
		return this.getStepColor(this.painting);
	}
}
