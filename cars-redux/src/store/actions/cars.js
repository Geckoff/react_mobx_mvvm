export const ORDER_CARS = "ORDER_CARS";
export const PUT_CARS_INTO_PRODUCTION = "PUT_CARS_INTO_PRODUCTION";
export const SELL_CARS = "SELL_CARS";
export const CLEAR_SALES = "CLEAR_SALES";

export const orderCars = () => ({
	type: ORDER_CARS
});

export const putCarsIntoProduction = carsBatch => ({
	type: PUT_CARS_INTO_PRODUCTION,
	carsBatch
});

export const sellCars = carsBatch => ({
	type: SELL_CARS,
	carsBatch
});

export const clearSales = () => ({
	type: CLEAR_SALES
});
