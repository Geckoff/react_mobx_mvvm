import React from "react";
import { Col, Row } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Button } from "reactstrap";
import { NotificationManager } from "react-notifications";
import { observer, inject } from "mobx-react";

export const Accounting = inject("carsStore")(
	observer(({ carsStore }) => {
		const {
			carsBatchesOrders,
			carsBatchesInProduction,
			carsBatchesSold,
			orderCars,
			clearSales
		} = carsStore;

		const formatMoney = sum => "$" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		const quantityInOrders = carsBatchesOrders.reduce((acc, curVal) => {
			return acc + curVal.quantity;
		}, 0);

		const priceInOrders = formatMoney(
			carsBatchesOrders.reduce((acc, curVal) => {
				return acc + curVal.batchPrice;
			}, 0)
		);

		const quantityInProduction = carsBatchesInProduction.reduce(
			(acc, curVal) => acc + curVal.quantity,
			0
		);

		const priceInProduction = formatMoney(
			carsBatchesInProduction.reduce((acc, curVal) => acc + curVal.batchPrice, 0)
		);

		const quantitySold = carsBatchesSold.reduce((acc, curVal) => acc + curVal.quantity, 0);

		const priceSold = formatMoney(
			carsBatchesSold.reduce((acc, curVal) => acc + curVal.batchPrice, 0)
		);

		const placeOrder = () => {
			NotificationManager.success("Cars ordered");
			orderCars();
		};

		const clearSalesData = () => {
			NotificationManager.warning("Sales stats cleared");
			clearSales();
		};

		const isClearSalesDisabled = quantitySold === 0;

		return (
			<div style={{ height: 1000 }}>
				<ListGroup>
					<ListGroupItem>Cars Ordered: {quantityInOrders}</ListGroupItem>
					<ListGroupItem>Orders Price: {priceInOrders}</ListGroupItem>
					<ListGroupItem>Cars In Production: {quantityInProduction}</ListGroupItem>
					<ListGroupItem>In Production Price: {priceInProduction}</ListGroupItem>
					<ListGroupItem>
						<strong>Cars Sold: {quantitySold}</strong>
					</ListGroupItem>
					<ListGroupItem>
						<strong>Revenue: {priceSold}</strong>
					</ListGroupItem>
				</ListGroup>
				<Row className="mt-3">
					<Col>
						<Button color="success" onClick={placeOrder}>
							Order Cars
						</Button>
					</Col>
					<Col>
						<Button
							color="warning"
							disabled={isClearSalesDisabled}
							onClick={clearSalesData}
						>
							Clear Sales
						</Button>
					</Col>
				</Row>
			</div>
		);
	})
);
