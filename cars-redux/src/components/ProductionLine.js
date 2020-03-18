import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CarsBatchCard } from "./CarsBatchCard";
import { putCarsIntoProduction, sellCars } from "../store/actions/cars";
import { Col, Row } from "reactstrap";
import { productionLineLoadingColors } from "./helpers/styleHelper";
import { NotificationManager } from "react-notifications";

export const ProductionLine = () => {
	const carsBatchesOrders = useSelector(state => state.cars.carsBatchesOrders);
	const dispatch = useDispatch();
	const [chassisAssembly, setChassisAssembly] = useState([]);
	const [bodyAssembly, setBodyAssembly] = useState([]);
	const [painting, setPainting] = useState([]);

	const moveToProduction = carsBatch => {
		NotificationManager.info("Moved to Production");
		dispatch(putCarsIntoProduction(carsBatch));
		setChassisAssembly([...chassisAssembly, carsBatch]);
	};

	const moveToBodyAssembly = carsBatch => {
		NotificationManager.info("Moved to Body Assembly");
		setChassisAssembly(chassisAssembly =>
			chassisAssembly.filter(
				chassisAssemblyCarsBatch => chassisAssemblyCarsBatch !== carsBatch
			)
		);
		setBodyAssembly([...bodyAssembly, carsBatch]);
	};

	const moveToPainting = carsBatch => {
		NotificationManager.info("Moved to Painting");
		setBodyAssembly(bodyAssembly =>
			bodyAssembly.filter(bodyAssemblyCarsBatch => bodyAssemblyCarsBatch !== carsBatch)
		);
		setPainting([...painting, carsBatch]);
	};

	const sellCarsBatch = carsBatch => {
		NotificationManager.success("Sold!");
		setPainting(painting =>
			painting.filter(paintingCarsBatch => paintingCarsBatch !== carsBatch)
		);
		dispatch(sellCars(carsBatch));
	};

	const getStepColor = carBatches => {
		const { empty, superLight, light, medium, heavy, superHeavy } = productionLineLoadingColors;
		switch (true) {
			case carBatches.length === 0:
				return empty;
			case carBatches.length === 1:
				return superLight;
			case carBatches.length === 2:
				return light;
			case carBatches.length === 3:
				return medium;
			case carBatches.length === 4:
				return heavy;
			case carBatches.length > 4:
				return superHeavy;
			default:
				break;
		}
	};

	const ordersStepColor = getStepColor(carsBatchesOrders);
	const chassisAssemblyStepColor = getStepColor(chassisAssembly);
	const bodyAssemblyStepColor = getStepColor(bodyAssembly);
	const paintingStepColor = getStepColor(painting);

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
};
