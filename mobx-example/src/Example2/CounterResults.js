import React from "react";
import { inject, observer } from "mobx-react";

export const CounterResults = inject("store")(
	observer(props => {
		return (
			<div>
				<h3>Results</h3>
				<div>Value 1: {props.store.value1}</div>
				<div>Value 2: {props.store.value2}</div>
			</div>
		);
	})
);
