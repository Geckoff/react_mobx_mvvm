/*
Images by - www.freepik.com/free-photos-vectors/car
*/
import React from "react";
import "./App.css";
import { ProductionLine } from "./components/ProductionLine/ProductionLine";
import { Accounting } from "./components/Accounting/Accounting";
import "bootstrap/dist/css/bootstrap.css";
import "react-notifications/lib/notifications.css";
import { Col, Row } from "reactstrap";
import { NotificationContainer } from "react-notifications";
import { Provider } from "mobx-react";
import { CarsStore } from "./store/CarsStore";
import { useInstance } from "./hooks/useInstance";
import { ProductionLineViewModel } from "./components/ProductionLine/ProductionLineViewModel";
import { AccountingViewModel } from "./components/Accounting/AccountingViewModel";

const carsStore = new CarsStore();

function App() {
	const accountingViewModel = useInstance(new AccountingViewModel(carsStore));
	const productionLineViewModel = useInstance(new ProductionLineViewModel(carsStore));

	return (
		<Provider carsStore={carsStore}>
			<div className="App p-4">
				<Row>
					<Col className="border" sm="9">
						<h2>Production</h2>
						<ProductionLine productionLineViewModel={productionLineViewModel} />
					</Col>
					<Col className="border" sm="3">
						<h2>Accounting</h2>
						<Accounting accountingViewModel={accountingViewModel} />
					</Col>
				</Row>
			</div>
			<NotificationContainer />
		</Provider>
	);
}

export default App;
