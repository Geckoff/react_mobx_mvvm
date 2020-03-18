import { observable, action, computed } from "mobx";

export class Store {
	@observable value1 = 0;
	@observable value2 = 0;

	@action changeValue1 = () => {
		this.value1 = this.value1 + 5;
	};

	@action changeValue2 = () => {
		this.value2 = this.value2 - 5;
	};

	@computed get valSum() {
		return this.value1 + this.value2;
	}
}
