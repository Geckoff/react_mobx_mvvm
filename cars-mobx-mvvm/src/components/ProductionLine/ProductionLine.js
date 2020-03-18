import React from "react";
import { CarsBatchCard } from "./CarsBatchCard";
import { Col, Row } from "reactstrap";
import { observer, inject } from "mobx-react";
import { ProductionLineViewModel } from "./ProductionLineViewModel";
import { useInstance } from "../../hooks/useInstance";

export const ProductionLine = inject("carsStore")(
	observer(({ carsStore }) => {
		const {
			carsBatchesOrders,
			chassisAssembly,
			bodyAssembly,
			painting,
			ordersStepColor,
			chassisAssemblyStepColor,
			bodyAssemblyStepColor,
			paintingStepColor,
			moveToProduction,
			moveToBodyAssembly,
			moveToPainting,
			sellCarsBatch
		} = useInstance(new ProductionLineViewModel(carsStore));

		return (
			<Row style={{ minHeight: 1000 }}>
				<Col className="mr-4 border-right">
					<h4 style={{ color: ordersStepColor }}>
						<u>ORDERS</u>
					</h4>
					{carsBatchesOrders.map(carsBatch => (
						<CarsBatchCard
							key={carsBatch.id}
							carsBatch={carsBatch}
							nextStep="Move to Production"
							handleClick={moveToProduction.bind(null, carsBatch)}
						/>
					))}
				</Col>
				<Col>
					<h4 style={{ color: chassisAssemblyStepColor }}>1. Chassis Assembly</h4>
					{chassisAssembly.map(carsBatch => (
						<CarsBatchCard
							key={carsBatch.id}
							carsBatch={carsBatch}
							nextStep="Move to Body Assembly"
							handleClick={moveToBodyAssembly.bind(null, carsBatch)}
						/>
					))}
				</Col>
				<Col>
					<h4 style={{ color: bodyAssemblyStepColor }}>2. Body Assembly</h4>
					{bodyAssembly.map(carsBatch => (
						<CarsBatchCard
							key={carsBatch.id}
							carsBatch={carsBatch}
							nextStep="Move to Painting"
							handleClick={moveToPainting.bind(null, carsBatch)}
						/>
					))}
				</Col>
				<Col>
					<h4 style={{ color: paintingStepColor }}>3. Painting</h4>
					{painting.map(carsBatch => (
						<CarsBatchCard
							key={carsBatch.id}
							carsBatch={carsBatch}
							nextStep="Sell Cars"
							handleClick={sellCarsBatch.bind(null, carsBatch)}
						/>
					))}
				</Col>
			</Row>
		);
	})
);
