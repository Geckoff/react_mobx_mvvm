import { computed } from "mobx";
import { NotificationManager } from "react-notifications";

export class AccountingViewModel {
	carsStore;

	constructor(carsStore) {
		this.carsStore = carsStore;
	}

	formatMoney = sum => "$" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	@computed get quantityInOrders() {
		return this.carsStore.carsBatchesOrders.reduce((acc, curVal) => {
			return acc + curVal.quantity;
		}, 0);
	}

	@computed get priceInOrders() {
		return this.formatMoney(
			this.carsStore.carsBatchesOrders.reduce((acc, curVal) => {
				return acc + curVal.batchPrice;
			}, 0)
		);
	}

	@computed get quantityInProduction() {
		return this.carsStore.carsBatchesInProduction.reduce(
			(acc, curVal) => acc + curVal.quantity,
			0
		);
	}

	@computed get priceInProduction() {
		return this.formatMoney(
			this.carsStore.carsBatchesInProduction.reduce(
				(acc, curVal) => acc + curVal.batchPrice,
				0
			)
		);
	}

	@computed get quantitySold() {
		return this.carsStore.carsBatchesSold.reduce((acc, curVal) => acc + curVal.quantity, 0);
	}

	@computed get priceSold() {
		return this.formatMoney(
			this.carsStore.carsBatchesSold.reduce((acc, curVal) => acc + curVal.batchPrice, 0)
		);
	}

	placeOrder = () => {
		NotificationManager.success("Cars ordered");
		this.carsStore.orderCars();
	};

	clearSalesData = () => {
		NotificationManager.warning("Sales stats cleared");
		this.carsStore.clearSales();
	};

	@computed get isClearSalesDisabled() {
		return this.quantitySold === 0;
	}
}
