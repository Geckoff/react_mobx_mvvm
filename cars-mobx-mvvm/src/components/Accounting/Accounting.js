import React from "react";
import { Col, Row } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Button } from "reactstrap";
import { observer, inject } from "mobx-react";
import { AccountingViewModel } from "./AccountingViewModel";
import { useInstance } from "../../hooks/useInstance";

export const Accounting = inject("carsStore")(
	observer(({ carsStore }) => {
		const {
			quantityInOrders,
			priceInOrders,
			quantityInProduction,
			priceInProduction,
			quantitySold,
			priceSold,
			placeOrder,
			clearSalesData,
			isClearSalesDisabled
		} = useInstance(new AccountingViewModel(carsStore));

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
