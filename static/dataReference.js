const UniverseData = {
	SystemType: ["Single", "Binary"],
	SystemComponents: ["Planets", "Asteroid Belt", "Comets"],
	StarTypes: [
		"Black Dwarf",
		"White Dwarf",
		"Blue Dwarf",
		"Red Dwarf",
		"Planetary Nebula",
		"Star-forming Nebula",
		"Protostar",
		"Mid-sized star",
		"Red Giant",
		"Protostar",
		"Massive Star",
		"Red Supergiant",
		"Neutron star",
		"Black hole",
	],
	PlanetType: ["Dwarf Planet", "Terrestrial", "Gas Giant", "Ice Giant"],
	Biomes: [
		"Tundra",
		"Alpine",
		"Desert",
		"Grassland",
		"Savannah",
		"Forest",
		"Jungle",
		"Beach",
		"Plains",
		"Wasteland",
		"Swamp",
	],
};

// Biome Colors
const BiomeColors = {
	Tundra: {
		r: 0,
		g: 0,
		b: 0,
		a: 255,
	},
	Alpine: {
		r: 0,
		g: 0,
		b: 0,
		a: 255,
	},
	Desert: {
		r: 0,
		g: 0,
		b: 0,
		a: 255,
	},
	Grassland: {
		r: 0,
		g: 0,
		b: 0,
		a: 255,
	},
	Savannah: {
		r: 0,
		g: 0,
		b: 0,
		a: 255,
	},
	Forest: {
		r: 0,
		g: 0,
		b: 0,
		a: 255,
	},
	Jungle: {
		r: 0,
		g: 0,
		b: 0,
		a: 255,
	},
	Beach: {
		r: 0,
		g: 0,
		b: 0,
		a: 255,
	},
};

// Lanaguage
const LanguageData = {
	Consonants: [
		"b",
		"c",
		"d",
		"f",
		"g",
		"h",
		"j",
		"k",
		"l",
		"m",
		"n",
		"nth",
		"p",
		"q",
		"r",
		"s",
		"sh",
		"t",
		"th",
		"v",
		"w",
		"wh",
		"x",
		"y",
		"z",
		"zh",
	],
	Diphthongs: [
		"aa",
		"ae",
		"ai",
		"ao",
		"au",
		"ea",
		"ee",
		"ei",
		"eo",
		"eu",
		"ia",
		"ie",
		"ii",
		"io",
		"iu",
		"oa",
		"oe",
		"oi",
		"oo",
		"ou",
		"ua",
		"ue",
		"ui",
		"uo",
		"uu",
	],
	Vowels: ["a", "e", "i", "o", "u"],
	SyllableType: [
		"a",
		"ac",
		"ca",
		"aca",
		"cac",
		"d",
		"dc",
		"cd",
		"acd",
		"dca",
		"cdc",
	],
};

const AsteroidData = {};

const CometData = {
	Composition: [],
	DiameterRange: {
		Min: 1.5,
		Max: 15,
	},
	MassRange: {
		Min: 1e13,
		Max: 3e14,
	},
	DensityRange: {
		Min: 0.25,
		Max: 0.75,
	},
};

const PlanetData = {
	"Dwarf Planet": {
		Rings: true,
		DiameterRange: {
			Min: 900,
			Max: 2500,
		},
		MassRange: {
			Min: 0.5e21,
			Max: 13e21,
		},
		DensityRange: {
			Min: 1.5,
			Max: 2.5,
		},
		TemperatureRange: {
			Min: -150.0,
			Max: 450.0,
		},
	},
	Terrestrial: {
		Rings: true,
		DiameterRange: {
			Min: 4500,
			Max: 12500,
		},
		MassRange: {
			Min: 3e23,
			Max: 4.8e24,
		},
		DensityRange: {
			Min: 5.4,
			Max: 5.5,
		},
		GravityRange: {
			Min: 3.7,
			Max: 8.87,
		},
		TemperatureRange: {
			Min: -150.0,
			Max: 450.0,
		},
	},
	"Gas Giant": {
		Rings: true,
		DiameterRange: {
			Min: 96000,
			Max: 140000,
		},
		MassRange: {
			Min: 5.6e25,
			Max: 1.9e27,
		},
		DensityRange: {
			Min: 0.68,
			Max: 1.36,
		},
		GravityRange: {
			Min: 10.4,
			Max: 24.8,
		},
		Class: {
			i: {
				Type: "Ammonia Clouds",
				TemperatureRange: {
					Min: -200.0,
					Max: -120.0,
				},
			},
			ii: {
				Type: "Water Clouds",
				TemperatureRange: {
					Min: -120.0,
					Max: 80.0,
				},
			},
			iii: {
				Type: "Cloudless",
				TemperatureRange: {
					Min: 80.0,
					Max: 630.0,
				},
			},
			iv: {
				Type: "Alkali Metals",
				TemperatureRange: {
					Min: 650.0,
					Max: 1000.0,
				},
			},
			v: {
				Type: "Silicate Metals",
				TemperatureRange: {
					Min: 1000.0,
					Max: 1200.0,
				},
			},
		},
	},
	"Ice Giant": {
		Rings: true,
		DiameterRange: {
			Min: 48000,
			Max: 60000,
		},
		MassRange: {
			Min: 8.5e25,
			Max: 10e25,
		},
		DensityRange: {
			Min: 1.2,
			Max: 1.68,
		},
		TemperatureRange: {
			Min: -220.0,
			Max: -180.0,
		},
		GravityRange: {
			Min: 8.5,
			Max: 11.5,
		},
	},
};

const MoonData = {
	RatioRange: {
		Min: 0.01,
		Max: 0.1,
	},
};
//Diameter - km
//Mass - kg
//Density - g/cm3
//Gravity - m/s2
