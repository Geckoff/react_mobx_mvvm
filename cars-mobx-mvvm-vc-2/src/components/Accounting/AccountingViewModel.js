import { computed } from "mobx";

export class AccountingViewModel {
	carsStore;

	constructor(carsStore) {
		this.carsStore = carsStore;
	}

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
		return this.carsStore.carsBatchesInProduction.reduce(
			(acc, curVal) => acc + curVal.quantity,
			0
		);
	}

	@computed get priceInProduction() {
		return this.carsStore.carsBatchesInProduction.reduce(
			(acc, curVal) => acc + curVal.batchPrice,
			0
		);
	}

	@computed get quantitySold() {
		return this.carsStore.carsBatchesSold.reduce((acc, curVal) => acc + curVal.quantity, 0);
	}

	@computed get priceSold() {
		return this.carsStore.carsBatchesSold.reduce((acc, curVal) => acc + curVal.batchPrice, 0);
	}

	placeOrder = () => {
		this.carsStore.orderCars();
	};

	clearSalesData = () => {
		this.carsStore.clearSales();
	};
}
