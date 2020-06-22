var Universe = {};
var Language = {};
var randomGenerator;

function ClearUniverse() {
	Universe = {};
}

function GenerateUniverse(seed) {
	randomGenerator = new Math.seedrandom(seed);

	// Create Universe Language
	GenerateLangauge();

	// Create System
	Universe["System"] =
		UniverseData.SystemType[
			getRandomInt(0, UniverseData.SystemType.length - 1)
		];

	Universe["Stars"] = [];

	// Create Star Type
	if (Universe["System"] === "Single") {
		let star = {
			Type:
				UniverseData.StarTypes[
					getRandomInt(0, UniverseData.StarTypes.length - 1)
				],
			Name: "Star " + GenerateRandomName(),
		};
		star["Diameter"] = getRandomFloat(
			StarData[star.Type]["DiameterRange"]["Min"],
			StarData[star.Type]["DiameterRange"]["Max"]
		);
		star["Coordinate"] = {
			x: 0,
			y: 0,
		};
		Universe["Stars"].push(star);
	} else {
		for (let i = 0; i < 2; i++) {
			let star = {
				Type:
					UniverseData.StarTypes[
						getRandomInt(0, UniverseData.StarTypes.length - 1)
					],
				Name: "Star " + GenerateRandomName(),
			};
			star["Diameter"] = getRandomFloat(
				StarData[star.Type]["DiameterRange"]["Min"],
				StarData[star.Type]["DiameterRange"]["Max"]
			);
			star["Coordinate"] = {
				x: getRandomFloat(0, 10),
				y: getRandomFloat(0, 10),
			};
			Universe["Stars"].push(star);
		}
	}

	// Create System Components
	for (let i = 0; i < Universe["Stars"].length; i++) {
		// Create Asteroid Belts
		let asteroidBelts = [];
		let numberOfBelts = getRandomInt(0, 5);

		for (let j = 0; j < numberOfBelts; j++) {
			asteroidBelts.push({
				Name: GenerateRandomName() + " Belt",
			});
		}

		Universe["Stars"][i]["Asteroid Belts"] = asteroidBelts;
		$("#progressBar").css("width", "33%");

		// Create comets
		let comets = [];
		let numberOfComets = getRandomInt(0, 50);

		for (let j = 0; j < numberOfComets; j++) {
			let comet = {
				Name: "Comet " + GenerateRandomName(),
				Diameter: getRandomFloat(
					CometData["DiameterRange"]["Min"],
					CometData["DiameterRange"]["Max"]
				),
				Mass: getRandomFloat(
					CometData["MassRange"]["Min"],
					CometData["MassRange"]["Max"]
				),
			};
			comet["Density"] = calculateDensity(comet["Mass"], comet["Diameter"]);

			comets.push(comet);
		}

		Universe["Stars"][i]["Comets"] = comets;
		$("#progressBar").css("width", "66%");

		// Create Planets
		let starCenterX = Universe["Stars"][i]["Coordinate"]["x"];
		let starCenterY = Universe["Stars"][i]["Coordinate"]["y"];
		let planets = [];
		let numberOfPlanets = getRandomInt(1, 12);

		for (let j = 0; j < numberOfPlanets; j++) {
			let planet = {
				Name: "Planet " + GenerateRandomName(),
				Type:
					UniverseData.PlanetType[
						getRandomInt(0, UniverseData.PlanetType.length - 1)
					],
			};

			if (planet["Type"] === "Gas Giant") {
				planet["Class"] = getGasGiantClass();
			}

			// Rings
			if (getRandomInt(0, 1) === 0) {
				planet["Rings"] = true;
			} else {
				planet["Rings"] = false;
			}

			// Coordinate
			let theta = getRandomFloat(0.0, 2 * Math.PI);
			let distance = getRandomFloat(0.25, 30);
			planet["Coordinate"] = {
				x: starCenterX + distance * Math.cos(theta),
				y: starCenterY - distance * Math.sin(theta),
			};

			planet["Perihelion"] = distance;

			// Diameter
			planet["Diameter"] = getRandomFloat(
				PlanetData[planet.Type]["DiameterRange"]["Min"],
				PlanetData[planet.Type]["DiameterRange"]["Max"]
			);

			// Mass
			planet["Mass"] = getRandomFloat(
				PlanetData[planet.Type]["MassRange"]["Min"],
				PlanetData[planet.Type]["MassRange"]["Max"]
			);

			// Density
			planet["Volume"] = calculateVolume(planet["Diameter"]);
			planet["Density"] = calculateDensity(planet["Mass"], planet["Volume"]);

			// Gravity
			planet["Gravity"] = calculateSurfaceGravitY(
				planet["Mass"],
				planet["Diameter"]
			);

			// Escape Velocity
			planet["Escape Velocity"] = calculateEscapeVelocity(
				planet["Mass"],
				planet["Diameter"]
			);

			// Temperatue
			planet["Temperature"] = getPlanetTemperature(
				planet["Type"],
				planet["Class"]
			);

			// Determine Habitability
			planet["Habitable"] = checkHabitability(planet["Temperature"]);

			if (planet["Habitable"]) {
				Universe["Life"] = true;
			} else {
				Universe["Life"] = false;
			}

			// Create Moons
			let moons = [];
			let numberOfMoons;
			if (planet["Type"] === "Dwarf Planet") {
				numberOfMoons = getRandomInt(0, 1);
			} else if (planet["Type"] === "Terrestrial") {
				numberOfMoons = getRandomInt(0, 5);
			} else if (planet["Type"] === "Gas Giant") {
				numberOfMoons = getRandomInt(1, 20);
			} else {
				numberOfMoons = getRandomInt(1, 20);
			}

			for (let i = 0; i < numberOfMoons; i++) {
				let moon = {
					Name: GenerateRandomName() + " Moon",
				};

				moon["Temperature"] = getPlanetTemperature(planet["Type"]);
				moon["Habitable"] = checkHabitability(moon["Temperature"]);

				moon["Mass"] = getRandomFloat(
					PlanetData["Dwarf Planet"]["MassRange"]["Min"],
					PlanetData["Dwarf Planet"]["MassRange"]["Max"]
				);

				moon["Diameter"] = getRandomFloat(
					PlanetData["Dwarf Planet"]["DiameterRange"]["Min"],
					PlanetData["Dwarf Planet"]["DiameterRange"]["Max"]
				);

				moon["Volume"] = calculateVolume(moon["Diameter"]);
				moon["Density"] = calculateDensity(moon["Mass"], moon["Volume"]);

				moon["Gravity"] = calculateSurfaceGravitY(
					moon["Mass"],
					moon["Diameter"]
				);

				moon["Escape Velocity"] = calculateEscapeVelocity(
					moon["Mass"],
					moon["Diameter"]
				);

				moons.push(moon);
			}
			planet["Moons"] = moons;

			planets.push(planet);
		}

		Universe["Stars"][i]["Planets"] = planets;
		$("#progressBar").css("width", "100%");
	}
}

function GenerateLangauge() {
	// Determine Consonants
	let consonants = [];
	LanguageData.Consonants.forEach((consonant) => {
		let chance = getRandomInt(0, 100);
		if (chance < 95) {
			consonants.push(consonant);
		}
	});

	Language["Consonants"] = consonants;

	//Detemine Dipthongs
	let dipthongs = [];
	LanguageData.Diphthongs.forEach((dipthong) => {
		let chance = getRandomInt(0, 100);
		if (chance < 75) {
			dipthongs.push(dipthong);
		}
	});

	Language["Diphthongs"] = dipthongs;
	Language["Vowels"] = LanguageData.Vowels;
}

function GenerateRandomName() {
	let name = "";

	let numberOfSyllables = getRandomInt(2, 5);
	let ConsonantsLength = Language["Consonants"].length - 1;
	let DipthongsLength = Language["Diphthongs"].length - 1;

	for (let i = 0; i < numberOfSyllables; i++) {
		let syllableType =
			LanguageData.SyllableType[
				getRandomInt(0, LanguageData.SyllableType.length - 1)
			];
		switch (syllableType) {
			case "a":
				name += Language["Vowels"][getRandomInt(0, 4)];
				break;
			case "ac":
				name +=
					Language["Vowels"][getRandomInt(0, 4)] +
					Language["Consonants"][getRandomInt(0, ConsonantsLength)];
				break;
			case "ca":
				name +=
					Language["Consonants"][getRandomInt(0, ConsonantsLength)] +
					Language["Vowels"][getRandomInt(0, 4)];
				break;
			case "aca":
				name +=
					Language["Vowels"][getRandomInt(0, 4)] +
					Language["Consonants"][getRandomInt(0, ConsonantsLength)] +
					Language["Vowels"][getRandomInt(0, 4)];
				break;
			case "cac":
				name +=
					Language["Consonants"][getRandomInt(0, ConsonantsLength)] +
					Language["Vowels"][getRandomInt(0, 4)] +
					Language["Consonants"][getRandomInt(0, ConsonantsLength)];
				break;
			case "d":
				name += Language["Diphthongs"][getRandomInt(0, DipthongsLength)];
				break;
			case "dc":
				name +=
					Language["Diphthongs"][getRandomInt(0, DipthongsLength)] +
					Language["Consonants"][getRandomInt(0, ConsonantsLength)];
				break;
			case "cd":
				name +=
					Language["Consonants"][getRandomInt(0, ConsonantsLength)] +
					Language["Diphthongs"][getRandomInt(0, DipthongsLength)];
				break;
			case "acd":
				name +=
					Language["Vowels"][getRandomInt(0, 4)] +
					Language["Diphthongs"][getRandomInt(0, DipthongsLength)] +
					Language["Consonants"][getRandomInt(0, ConsonantsLength)];
				break;
			case "dca":
				name +=
					Language["Diphthongs"][getRandomInt(0, DipthongsLength)] +
					Language["Consonants"][getRandomInt(0, ConsonantsLength)] +
					Language["Vowels"][getRandomInt(0, 4)];
				break;
			case "cdc":
				name +=
					Language["Consonants"][getRandomInt(0, ConsonantsLength)] +
					Language["Diphthongs"][getRandomInt(0, DipthongsLength)] +
					Language["Consonants"][getRandomInt(0, ConsonantsLength)];
				break;
			default:
				break;
		}
	}
	return name.capitalize();
}

function getGasGiantClass() {
	let classType = getRandomInt(1, 5);
	if (classType === 1) {
		return PlanetData["Gas Giant"]["Class"]["i"].Type;
	} else if (classType === 2) {
		return PlanetData["Gas Giant"]["Class"]["ii"].Type;
	} else if (classType === 3) {
		return PlanetData["Gas Giant"]["Class"]["iii"].Type;
	} else if (classType === 4) {
		return PlanetData["Gas Giant"]["Class"]["iv"].Type;
	} else {
		return PlanetData["Gas Giant"]["Class"]["v"].Type;
	}
}

function getPlanetTemperature(type, gasGiantClass) {
	if (type === "Gas Giant") {
		if (gasGiantClass === "Ammonia Clouds") {
			return getRandomInt(
				PlanetData["Gas Giant"]["Class"]["i"]["TemperatureRange"]["Min"],
				PlanetData["Gas Giant"]["Class"]["i"]["TemperatureRange"]["Max"]
			);
		} else if (gasGiantClass === "Water Clouds") {
			return getRandomInt(
				PlanetData["Gas Giant"]["Class"]["ii"]["TemperatureRange"]["Min"],
				PlanetData["Gas Giant"]["Class"]["ii"]["TemperatureRange"]["Max"]
			);
		} else if (gasGiantClass === "Cloudless") {
			return getRandomInt(
				PlanetData["Gas Giant"]["Class"]["iii"]["TemperatureRange"]["Min"],
				PlanetData["Gas Giant"]["Class"]["iii"]["TemperatureRange"]["Max"]
			);
		} else if (gasGiantClass === "Alkali Metals") {
			return getRandomInt(
				PlanetData["Gas Giant"]["Class"]["iv"]["TemperatureRange"]["Min"],
				PlanetData["Gas Giant"]["Class"]["iv"]["TemperatureRange"]["Max"]
			);
		} else {
			return getRandomInt(
				PlanetData["Gas Giant"]["Class"]["v"]["TemperatureRange"]["Min"],
				PlanetData["Gas Giant"]["Class"]["v"]["TemperatureRange"]["Max"]
			);
		}
	} else {
		return getRandomInt(
			PlanetData[type]["TemperatureRange"]["Min"],
			PlanetData[type]["TemperatureRange"]["Max"]
		);
	}
}

function checkHabitability(temperature) {
	if (temperature > 0 && temperature < 100) {
		Universe["Life"] = true;
		return true;
	} else {
		return false;
	}
}

function calculateDensity(mass, volume) {
	return (mass * 1000) / (volume * 1e15);
}

function calculateVolume(diameter) {
	return (4 / 3) * Math.PI * Math.pow(diameter * 0.5, 3);
}

function calculateSurfaceGravitY(mass, diameter) {
	return (6.674e-7 * mass) / Math.pow(diameter * 50000, 2);
}

function calculateCircumference(diameter) {
	return diameter * Math.PI;
}

function calculateEscapeVelocity(mass, diameter) {
	return Math.sqrt((2 * 6.674e-15 * mass) / (diameter * 50000));
}

function GenerateSystemChart() {
	let chartData = null;
	chartData = {
		datasets: [],
	};

	let dwarfPlanetData = {
		label: "Dwarf Planet",
		backgroundColor: chartBackgroundColors["Dwarf Planet"],
		borderColor: chartOutlineColors["Dwarf Planet"],
		borderWidth: 1,
		data: [],
	};
	let terrestrialPlanetData = {
		label: "Terrestrial",
		backgroundColor: chartBackgroundColors["Terrestrial"],
		borderColor: chartOutlineColors["Terrestrial"],
		borderWidth: 1,
		data: [],
	};
	let gasGiantPlanetData = {
		label: "Gas Giant",
		backgroundColor: chartBackgroundColors["Gas Giant"],
		borderColor: chartOutlineColors["Gas Giant"],
		borderWidth: 1,
		data: [],
	};
	let iceGiantPlanetData = {
		label: "Ice Giant",
		backgroundColor: chartBackgroundColors["Ice Giant"],
		borderColor: chartOutlineColors["Ice Giant"],
		borderWidth: 1,
		data: [],
	};

	// Create Moon Data Set
	let planetMoonData = {
		label: "Moons",
		backgroundColor: chartBackgroundColors["Moon"],
		borderColor: chartBackgroundColors["Moon"],
		borderWidth: 1,
		data: [],
	};

	Universe["Stars"].forEach((star) => {
		let starData = {
			label: star["Type"],
			backgroundColor: chartBackgroundColors[star["Type"]],
			borderColor: chartOutlineColors[star["Type"]],
			borderWidth: 1,
			data: [
				{
					label: star["Name"],
					x: star["Coordinate"]["x"],
					y: star["Coordinate"]["y"],
					r: chartSizes[star["Type"]],
				},
			],
		};

		chartData.datasets.push(starData);

		star["Planets"].forEach((planet) => {
			let planetData = {
				label: planet["Name"],
				x: planet["Coordinate"]["x"],
				y: planet["Coordinate"]["y"],
				r: chartSizes[planet["Type"]],
			};

			if (planet["Type"] === "Dwarf Planet") {
				dwarfPlanetData.data.push(planetData);
			} else if (planet["Type"] === "Terrestrial") {
				terrestrialPlanetData.data.push(planetData);
			} else if (planet["Type"] === "Gas Giant") {
				gasGiantPlanetData.data.push(planetData);
			} else {
				iceGiantPlanetData.data.push(planetData);
			}

			planet["Moons"].forEach((moon) => {
				let moonData = {
					label: moon["Name"],
					x: planet["Coordinate"]["x"] + getRandomFloat(0.0, 1.0),
					y: planet["Coordinate"]["y"] + getRandomFloat(0.0, 1.0),
					r: 2,
				};

				planetMoonData.data.push(moonData);
			});
		});
	});

	chartData.datasets.push(dwarfPlanetData);
	chartData.datasets.push(terrestrialPlanetData);
	chartData.datasets.push(gasGiantPlanetData);
	chartData.datasets.push(iceGiantPlanetData);
	chartData.datasets.push(planetMoonData);

	return chartData;
}

// TO DO
// Coordinates
// Rotation Speed
// Orbital Speed
// Surface Area
// Composition
