import { computed } from "mobx";

export class AccountingEmodelViewModel {
	carsStore;

	constructor(carsStore) {
		this.carsStore = carsStore;
	}

	filterOutOtherModels = carsBatch => carsBatch.name === "Model E";

	@computed get quantityInOrders() {
		return this.carsStore.carsBatchesOrders.reduce((acc, curVal) => {
			return acc + curVal.quantity;
		}, 0);
	}

	@computed get priceInOrders() {
		return this.carsStore.carsBatchesOrders.reduce((acc, curVal) => {
			return acc + curVal.batchPrice;
		}, 0);
	}

	@computed get quantityInProduction() {
		return "No Data";
	}

	@computed get priceInProduction() {
		return this.carsStore.carsBatchesInProduction
			.filter(this.filterOutOtherModels)
			.reduce((acc, curVal) => acc + curVal.batchPrice, 0);
	}

	@computed get quantitySold() {
		return this.carsStore.carsBatchesSold
			.filter(this.filterOutOtherModels)
			.reduce((acc, curVal) => acc + curVal.quantity, 0);
	}

	@computed get priceSold() {
		return this.carsStore.carsBatchesSold
			.filter(this.filterOutOtherModels)
			.reduce((acc, curVal) => acc + curVal.batchPrice, 0);
	}

	placeOrder = () => {
		this.carsStore.orderCars(4, 4);
	};

	clearSalesData = () => {
		const emodelCarsBatchesSold = this.carsStore.carsBatchesSold.filter(
			carsBatch => carsBatch.name !== "Model E"
		);
		this.carsStore.updatedSoldCars(emodelCarsBatchesSold);
	};
}
