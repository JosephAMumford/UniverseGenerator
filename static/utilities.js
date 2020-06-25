class RandomGenerator {
	constructor(seed) {
		this.seed = seed;
		this.rng = new Math.seedrandom(seed);
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.ceil(max);
		return Math.floor(this.rng() * (max - min)) + min;
	}

	getRandomFloat(min, max) {
		return this.rng() * (max - min) + min;
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max + 1);
	return Math.floor(randomGenerator() * (max - min)) + min;
}

function getRandomFloat(min, max) {
	return randomGenerator() * (max - min) + min;
}

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

function mapValueToRange(value, fromMin, fromMax, toMin, toMax) {
	return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin + toMin);
}
