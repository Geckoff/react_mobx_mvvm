import { observable, action, computed } from "mobx";
import { Random } from "random-js";

export class Store {
	@observable value1 = 0;
	@observable value2 = 0;
	random = new Random();

	getIncrement = () => {
		return this.random.integer(1, 5);
	};

	@action changeValue1 = () => {
		this.value1 = this.value1 + this.getIncrement();
	};

	@action changeValue2 = () => {
		this.value2 = this.value2 - this.getIncrement();
	};

	@computed get valSum() {
		return this.value1 + this.value2;
	}
}
