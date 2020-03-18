import { Random } from "random-js";
import modelA from "../../img/modelA.png";
import modelB from "../../img/modelB.png";
import modelC from "../../img/modelC.png";
import modelD from "../../img/modelD.png";
import modelE from "../../img/modelE.png";

export const carsBatches = [
	{
		id: 1,
		name: "Model A",
		quantity: 300,
		carPrice: 5000,
		img: modelA
	},
	{
		id: 2,
		name: "Model B",
		quantity: 450,
		carPrice: 6500,
		img: modelB
	},
	{
		id: 3,
		name: "Model C",
		quantity: 100,
		carPrice: 8900,
		img: modelC
	},
	{
		id: 4,
		name: "Model D",
		quantity: 170,
		carPrice: 3300,
		img: modelD
	},
	{
		id: 5,
		name: "Model E",
		quantity: 90,
		carPrice: 1800,
		img: modelE
	}
];

export class CarBatchModel {
	id;
	name;
	quantity;
	carPrice;
	img;

	constructor({ id, name, quantity, carPrice, img }) {
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.carPrice = carPrice;
		this.img = img;
	}

	get batchPrice() {
		return this.carPrice * this.quantity;
	}
}

export const carsBatchesModels = carsBatches.map(
	carsBatch =>
		new CarBatchModel({
			id: carsBatch.id,
			name: carsBatch.name,
			quantity: carsBatch.quantity,
			carPrice: carsBatch.carPrice,
			img: carsBatch.img
		})
);

export const getNewCarBatch = (rangeStart, rangeEnd) => {
	const random = new Random(); // uses the nativeMath engine
	const batchNumber = random.integer(rangeStart, rangeEnd);
	const { name, carPrice, img } = carsBatches[batchNumber];
	const id = random.integer(10, 9999999);
	const quantity = random.integer(10, 40) * 10;
	return new CarBatchModel({
		id,
		name,
		quantity,
		carPrice,
		img
	});
};
