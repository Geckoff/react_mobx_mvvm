import React from "react";
import { Store } from "./Srore";
import { Provider } from "mobx-react";
import { CounterHandlers } from "./CounterHandlers";
import { CounterResults } from "./CounterResults";
import { Col, Row } from "reactstrap";

const store = new Store();

export const Example2 = () => {
	return (
		<Provider store={store}>
			<Row>
				<Col>
					<CounterHandlers />
				</Col>
				<Col>
					<CounterResults />
				</Col>
			</Row>
		</Provider>
	);
};
