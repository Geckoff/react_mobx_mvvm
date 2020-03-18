import { computed } from "mobx";
import { NotificationManager } from "react-notifications";

export class AccountingViewController {
	accountingViewModel;

	constructor(accountingViewModel) {
		this.accountingViewModel = accountingViewModel;
	}

	formatMoney = sum => "$" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	@computed get quantityInOrders() {
		return this.accountingViewModel.quantityInOrders;
	}

	@computed get priceInOrders() {
		return this.formatMoney(this.accountingViewModel.priceInOrders);
	}

	@computed get quantityInProduction() {
		return this.accountingViewModel.quantityInProduction;
	}

	@computed get priceInProduction() {
		return this.formatMoney(this.accountingViewModel.priceInProduction);
	}

	@computed get quantitySold() {
		return this.accountingViewModel.quantitySold;
	}

	@computed get priceSold() {
		return this.formatMoney(this.accountingViewModel.priceSold);
	}

	placeOrder = () => {
		NotificationManager.success("Cars ordered");
		this.accountingViewModel.placeOrder();
	};

	clearSalesData = () => {
		NotificationManager.warning("Sales stats cleared");
		this.accountingViewModel.clearSalesData();
	};

	@computed get isClearSalesDisabled() {
		return this.quantitySold === 0;
	}
}
