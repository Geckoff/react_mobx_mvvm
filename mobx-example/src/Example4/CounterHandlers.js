import React, { useState } from "react";
import { inject, observer } from "mobx-react";

export const CounterHandlers = inject("store")(
	observer(props => {
		const [valueOneStates, setValueOneStates] = useState([]);
		const [valueTwoStates, setValueTwoStates] = useState([]);
		const [sumStates, setSumStates] = useState([]);
		const [multiplicationStates, setMultiplicationStates] = useState([]);
		const [polarityStates, setPolarityStates] = useState([]);

		const changeBothValsHandler = () => {
			setSumStates([...sumStates, props.store.value1 + props.store.value2]);
			setMultiplicationStates([
				...multiplicationStates,
				props.store.value1 * props.store.value2
			]);
			setPolarityStates([
				...polarityStates,
				props.store.value1 + props.store.value2 === 0
					? "0"
					: props.store.value1 + props.store.value2 > 0
					? "+"
					: "-"
			]);
		};

		const changeValOneHandler = () => {
			props.store.changeValue1();
			setValueOneStates([...valueOneStates, props.store.value1]);
			changeBothValsHandler();
		};

		const changeValTwoHandler = () => {
			props.store.changeValue2();
			setValueTwoStates([...valueTwoStates, props.store.value2]);
			changeBothValsHandler();
		};

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
