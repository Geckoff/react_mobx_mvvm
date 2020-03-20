const store1 = new Store();

const ValueControl = (
	observer(props => {
		return (
			<div>
				<button onClick={store1.changeValue}>Change Value</button>
				<div>Value: {store1.value}</div>
				<div>Doubled Value: {store1.doubledValue}</div>
			</div>
		);
	})
);