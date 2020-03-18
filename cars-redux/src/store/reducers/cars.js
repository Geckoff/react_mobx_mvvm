import { ORDER_CARS, SELL_CARS, PUT_CARS_INTO_PRODUCTION, CLEAR_SALES } from "../actions/cars";
import { carsBatchesModels, getNewCarBatch } from "../data/carsBatches";

const initialState = {
	carsBatchesOrders: carsBatchesModels,
	carsBatchesInProduction: [],
	carsBatchesSold: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ORDER_CARS:
			return {
				...state,
				carsBatchesOrders: [...state.carsBatchesOrders, getNewCarBatch()]
			};

		case PUT_CARS_INTO_PRODUCTION:
			return {
				...state,
				carsBatchesOrders: state.carsBatchesOrders.filter(
					carsBatch => carsBatch !== action.carsBatch
				),
				carsBatchesInProduction: [...state.carsBatchesInProduction, action.carsBatch]
			};

		case SELL_CARS:
			return {
				...state,
				carsBatchesInProduction: state.carsBatchesInProduction.filter(
					carsBatch => carsBatch !== action.carsBatch
				),
				carsBatchesSold: [...state.carsBatchesSold, action.carsBatch]
			};

		case CLEAR_SALES:
			return {
				...state,
				carsBatchesSold: []
			};

		default:
			return state;
	}
};
