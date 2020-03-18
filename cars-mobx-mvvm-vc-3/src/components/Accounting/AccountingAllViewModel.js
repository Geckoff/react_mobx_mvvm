import { computed } from "mobx";

export class AccountingAllViewModel {
	carsStore;

	constructor(carsStore) {
		this.carsStore = carsStore;
	}

	filterOutEmodel = carsBatch => carsBatch.name !== "Model E";
	applyDifferential = batchPrice => Math.round(batchPrice * 1);

	@computed get quantityInOrders() {
		return this.carsStore.carsBatchesOrders
			.filter(this.filterOutEmodel)
			.reduce((acc, curVal) => {
				return acc + curVal.quantity;
			}, 0);
	}

	@computed get priceInOrders() {
		return this.applyDifferential(
			this.carsStore.carsBatchesOrders.filter(this.filterOutEmodel).reduce((acc, curVal) => {
				return acc + curVal.batchPrice;
			}, 0)
		);
	}

	@computed get quantityInProduction() {
		return this.carsStore.carsBatchesInProduction
			.filter(this.filterOutEmodel)
			.reduce((acc, curVal) => acc + curVal.quantity, 0);
	}

	@computed get priceInProduction() {
		return this.applyDifferential(
			this.carsStore.carsBatchesInProduction
				.filter(this.filterOutEmodel)
				.reduce((acc, curVal) => acc + curVal.batchPrice, 0)
		);
	}

	@computed get quantitySold() {
		return this.carsStore.carsBatchesSold
			.filter(this.filterOutEmodel)
			.reduce((acc, curVal) => acc + curVal.quantity, 0);
	}

	@computed get priceSold() {
		return this.applyDifferential(
			this.carsStore.carsBatchesSold
				.filter(this.filterOutEmodel)
				.reduce((acc, curVal) => acc + curVal.batchPrice, 0)
		);
	}

	placeOrder = () => {
		this.carsStore.orderCars(0, 3);
	};

	clearSalesData = () => {
		const emodelCarsBatchesSold = this.carsStore.carsBatchesSold.filter(
			carsBatch => carsBatch.name === "Model E"
		);
		this.carsStore.updatedSoldCars(emodelCarsBatchesSold);
	};
}
