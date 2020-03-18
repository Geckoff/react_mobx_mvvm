import React from "react";
import { Button } from "reactstrap";

export const CarsBatchCard = ({ carsBatch, handleClick, nextStep }) => {
	return (
		<div className="border mt-3 p-2">
			<div className="">
				<h5>{carsBatch.name}</h5>
				<div>Quantity: {carsBatch.quantity}</div>
				<div>
					<img style={{ width: 90 }} src={carsBatch.img} alt="car" />
				</div>
				<Button className="mt-1" onClick={handleClick}>
					{nextStep}
				</Button>
			</div>
		</div>
	);
};
