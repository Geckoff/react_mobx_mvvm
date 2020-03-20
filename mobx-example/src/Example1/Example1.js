import React from "react";
import { observable, action, computed } from "mobx";
import { Provider, inject, observer } from "mobx-react";

/*===============
STORE
===============*/

class Store {
	// STATE
	@observable value = 0;

	// COMPUTED VALUE
	@computed get doubledValue() {
		//this.value++; - DO NOT DO THAT
		return this.value * 2;
	}

	set doubledValue(value) {
		this.value = value / 2;
	}

	// ACTION
	@action changeValue = () => {
		//this.value++;
		this.doubledValue = this.doubledValue + 2;
	};
}

/*===============
COMPONENT USING STORE (REACTION)
===============*/

const store1 = new Store();

const ValueControl = (
	observer(props => {
		return (
			<div>
				<button onClick={store1.changeValue}>Change Value</button>
				<div>Value: {store1.value}</div>
				<div>Doubled Value: {store1.doubledValue}</div>
			</div>
		);
	})
);

/*===============
APP ENTRY POINT
===============*/

const store = new Store();

export const Example1 = () => {
	return (
		<Provider store={store}>
			<ValueControl />
		</Provider>
	);
};
