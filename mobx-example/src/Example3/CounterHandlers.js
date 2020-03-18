import React from "react";
import { inject, observer } from "mobx-react";

export const CounterHandlers = inject("store")(
	observer(props => {
		return (
			<div>
				<h3>Handlers</h3>
				<div>
					<button onClick={props.store.changeValue1}>Change Value 1</button>
				</div>
				<div>
					<button onClick={props.store.changeValue2}>Change Value 2</button>
				</div>
			</div>
		);
	})
);
