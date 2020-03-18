import { computed } from "mobx";
import { NotificationManager } from "react-notifications";
import { productionLineLoadingColors } from "../helpers/styleHelper";

export class ProductionLineViewController {
	productionLineViewModel;

	constructor(productionLineViewModel) {
		this.productionLineViewModel = productionLineViewModel;
	}

	@computed get chassisAssembly() {
		return this.productionLineViewModel.chassisAssembly;
	}

	@computed get bodyAssembly() {
		return this.productionLineViewModel.bodyAssembly;
	}

	@computed get painting() {
		return this.productionLineViewModel.painting;
	}

	moveToProduction = carsBatch => {
		NotificationManager.info("Moved to Production");
		this.productionLineViewModel.moveToProduction(carsBatch);
	};

	moveToBodyAssembly = carsBatch => {
		NotificationManager.info("Moved to Body Assembly");
		this.productionLineViewModel.moveToBodyAssembly(carsBatch);
	};

	moveToPainting = carsBatch => {
		NotificationManager.info("Moved to Painting");
		this.productionLineViewModel.moveToPainting(carsBatch);
	};

	sellCarsBatch = carsBatch => {
		NotificationManager.success("Sold!");
		this.productionLineViewModel.sellCarsBatch(carsBatch);
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
		return this.productionLineViewModel.carsBatchesOrders;
	}

	@computed get ordersStepColor() {
		return this.getStepColor(this.productionLineViewModel.carsBatchesOrders);
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
