/*
Images by - www.freepik.com/free-photos-vectors/car
*/
import React from "react";
import "./App.css";
import carsReducer from "./store/reducers/cars";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { ProductionLine } from "./components/ProductionLine";
import { Accounting } from "./components/Accounting";
import "bootstrap/dist/css/bootstrap.css";
import "react-notifications/lib/notifications.css";
import { Col, Row } from "reactstrap";
import { NotificationContainer } from "react-notifications";

const rootReducer = combineReducers({
	cars: carsReducer
});

const store = createStore(rootReducer);

function App() {
	return (
		<Provider store={store}>
			<div className="App p-4">
				<Row>
					<Col className="border" sm="9">
						<h2>Production</h2>
						<ProductionLine />
					</Col>
					<Col className="border" sm="3">
						<h2>Accounting</h2>
						<Accounting />
					</Col>
				</Row>
			</div>
			<NotificationContainer />
		</Provider>
	);
}

export default App;
