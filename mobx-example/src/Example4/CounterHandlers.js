import React, { useState } from "react";
import { inject, observer } from "mobx-react";

export const CounterHandlers = inject("store")(
	observer(props => {
		const [valueOneSteps, setValueOneSteps] = useState([]);
		const [valueTwoSteps, setValueTwoSteps] = useState([]);
		const [sumSteps, setSumSteps] = useState([]);

		const changeValOneHandler = () => {
			props.store.changeValue1();
			setValueOneSteps([...valueOneSteps, props.store.value1]);
			setSumSteps([...sumSteps, props.store.value1 + props.store.value2]);
		};

		const changeValTwoHandler = () => {
			props.store.changeValue2();
			setValueTwoSteps([...valueTwoSteps, props.store.value2]);
			setSumSteps([...sumSteps, props.store.value1 + props.store.value2]);
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
					<div>Value 1 Steps: {valueOneSteps.join(", ")}</div>
					<div>Value 2 Steps: {valueTwoSteps.join(", ")}</div>
					<div>Sum Steps: {sumSteps.join(", ")}</div>
				</div>
			</div>
		);
	})
);
