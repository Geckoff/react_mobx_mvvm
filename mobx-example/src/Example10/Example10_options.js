//INCORRECT
class SpeedDisplayViewModel {
    @observable speed;

    constructor(speed) {
        this.speed = speed;
    }

    @computed get kph() {
        return `${this.speed} km/h`;
    }

    @computed get mph() {
        return `${parseInt(this.speed / 1.6)} mi/h`;
    }
}

const speedDisplayViewModel = new SpeedDisplayViewModel(carViewModel.maxSpeed);

//CORRECT SOURCE
class SpeedDisplayViewModel {
	speedSource;
	speedProp;

    constructor(speedSource, speedProp) {
        this.speedSource = speedSource;
        this.speedProp = speedProp;
	}
	
	@computed get speed() {
		return this.speedSource[this.speedProp]	
	}

    @computed get kph() {
        return `${this.speed} km/h`;
    }

    @computed get mph() {
        return `${parseInt(this.speed / 1.6)} mi/h`;
    }
}

const speedDisplayViewModel = new SpeedDisplayViewModel(carViewModel, "maxSpeed");

//CORRECT GETTER
class SpeedDisplayViewModel {
	getSpeed

    constructor(getSpeed) {
        this.getSpeed = getSpeed;
	}
	
	@computed get speed() {
		return this.getSpeed()
	}

    @computed get kph() {
        return `${this.speed} km/h`;
    }

    @computed get mph() {
        return `${parseInt(this.speed / 1.6)} mi/h`;
    }
}

const speedDisplayViewModel = new SpeedDisplayViewModel(() => carViewModel.maxSpeed);