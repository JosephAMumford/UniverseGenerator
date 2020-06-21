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

	// Create Star Type
	if (Universe["System"] === "Single") {
		Universe["Stars"] = [
			{
				Type:
					UniverseData.StarTypes[
						getRandomInt(0, UniverseData.StarTypes.length - 1)
					],
				Name: "Star " + GenerateRandomName(),
			},
		];
	} else {
		Universe["Stars"] = [
			{
				Type:
					UniverseData.StarTypes[
						getRandomInt(0, UniverseData.StarTypes.length - 1)
					],
				Name: "Star " + GenerateRandomName(),
			},
			{
				Type:
					UniverseData.StarTypes[
						getRandomInt(0, UniverseData.StarTypes.length - 1)
					],
				Name: "Star " + GenerateRandomName(),
			},
		];
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

		Universe["Stars"][i]["AsteroidBelts"] = asteroidBelts;
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
	let chartData = {
		datasets: [],
	};

	// Create Planet Data Set
	// let planetDataSet = {
	// 	label: "Planets",
	// 	backgroundColor: "rgba(178, 255, 102, 255)",
	// 	borderColor: "rgba(0, 1, 0, 0.1)",
	// 	borderWidth: 1,
	// 	data: [],
	// };

	let dwarfPlanetData = {
		label: "Dwarf Planet",
		backgroundColor: chartColors["Dwarf Planet"],
		borderColor: "rgba(0, 1, 0, 0.1)",
		borderWidth: 1,
		data: [],
	};
	let terrestrialPlanetData = {
		label: "Terrestrial",
		backgroundColor: chartColors["Terrestrial"],
		borderColor: "rgba(0, 1, 0, 0.1)",
		borderWidth: 1,
		data: [],
	};
	let gasGiantPlanetData = {
		label: "Gas Giant",
		backgroundColor: chartColors["Gas Giant"],
		borderColor: "rgba(0, 1, 0, 0.1)",
		borderWidth: 1,
		data: [],
	};
	let iceGiantPlanetData = {
		label: "Ice Giant",
		backgroundColor: chartColors["Ice Giant"],
		borderColor: "rgba(0, 1, 0, 0.1)",
		borderWidth: 1,
		data: [],
	};

	Universe["Stars"].forEach((star) => {
		let starData = {
			label: star["Type"],
			backgroundColor: chartColors[star["Type"]],
			borderColor: "rgba(0, 1, 0, 0.1)",
			borderWidth: 1,
			data: [
				{
					label: star["Type"],
					x: getRandomInt(-20, 20),
					y: getRandomInt(-20, 20),
					r: chartSizes[star["Type"]],
				},
			],
		};

		chartData.datasets.push(starData);

		star["Planets"].forEach((planet) => {
			let planetData = {
				label: planet["Name"],
				x: getRandomInt(-20, 20),
				y: getRandomInt(-20, 20),
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
		});
	});

	chartData.datasets.push(dwarfPlanetData);
	chartData.datasets.push(terrestrialPlanetData);
	chartData.datasets.push(gasGiantPlanetData);
	chartData.datasets.push(iceGiantPlanetData);

	// Create Moon Data Set

	return chartData;
}

// TO DO
// Coordinates
// Rotation Speed
// Orbital Speed
// Surface Area
// Composition
