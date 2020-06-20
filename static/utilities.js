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
