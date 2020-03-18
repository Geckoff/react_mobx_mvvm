import React from "react";
import { inject, observer } from "mobx-react";
import { observable, action } from "mobx";
import { useInstance } from "../hooks/useInstance";

class CounterHandlersViewModel {
	@observable valueOneStates = [];
	@observable valueTwoStates = [];
	@observable sumStates = [];
	@observable multiplicationStates = [];
	@observable polarityStates = [];

	constructor(store) {
		this.store = store;
	}

	@action setValueOneStates = () => {
		this.valueOneStates.push(this.store.value1);
	};

	@action setValueTwoStates = () => {
		this.valueTwoStates.push(this.store.value2);
	};

	@action changeBothValsHandler = () => {
		this.sumStates.push(this.store.value1 + this.store.value2);
		this.multiplicationStates.push(this.store.value1 * this.store.value2);
		this.polarityStates.push(
			this.store.value1 + this.store.value2 === 0
				? "0"
				: this.store.value1 + this.store.value2 > 0
				? "+"
				: "-"
		);
	};

	changeValOneHandler = () => {
		this.store.changeValue1();
		this.setValueOneStates();
		this.changeBothValsHandler();
	};

	changeValTwoHandler = () => {
		this.store.changeValue2();
		this.setValueTwoStates();
		this.changeBothValsHandler();
	};
}

export const CounterHandlers = inject("store")(
	observer(props => {
		const {
			valueOneStates,
			valueTwoStates,
			sumStates,
			multiplicationStates,
			polarityStates,
			changeValOneHandler,
			changeValTwoHandler
		} = useInstance(new CounterHandlersViewModel(props.store));

		return (
			<div>
				<h3>Handlers</h3>
				<div>
					<button onClick={changeValOneHandler}>Change Value 1</button>
				</div>
				<div>
					<button onClick={changeValTwoHandler}>Change Value 2</button>
				</div>
				<div className="mt-4">
					<div>Value 1 states: {valueOneStates.join(", ")}</div>
					<div>Value 2 states: {valueTwoStates.join(", ")}</div>
					<div>Sum states: {sumStates.join(", ")}</div>
					<div>Multiplication states: {multiplicationStates.join(", ")}</div>
					<div>Positive/Negative states: {polarityStates.join(", ")}</div>
				</div>
			</div>
		);
	})
);
