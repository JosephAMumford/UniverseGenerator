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

const StarData = {
	"Black Dwarf": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"White Dwarf": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Blue Dwarf": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Red Dwarf": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Planetary Nebula": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Star-forming Nebula": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	Protostar: {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Mid-sized star": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Red Giant": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	Protostar: {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Massive Star": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Red Supergiant": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Neutron star": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
	},
	"Black hole": {
		DiameterRange: {
			Min: 0,
			Max: 0,
		},
		MassRange: {
			Min: 0,
			Max: 0,
		},
		DensityRange: {
			Min: 0,
			Max: 0,
		},
		TemperatureRange: {
			Min: 0,
			Max: 0,
		},
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

const chartBackgroundColors = {
	"Dwarf Planet": "rgba(222, 184, 135, 255)",
	Terrestrial: "rgba(160, 69, 19, 255)",
	"Gas Giant": "rgba(218,165, 32, 255)",
	"Ice Giant": "rgba(70, 130, 180, 255)",
	"Black Dwarf": "rgba(32, 32, 32, 255)",
	"White Dwarf": "rgba(255, 250, 250, 255)",
	"Blue Dwarf": "rgba(135, 206, 250, 255)",
	"Red Dwarf": "rgba(255, 69, 0, 255)",
	"Planetary Nebula": "rgba(60, 179, 113, 255)",
	"Star-forming Nebula": "rgba(138, 43, 226, 255)",
	Protostar: "rgba(221, 160, 221, 255)",
	"Mid-sized star": "rgba(255, 255, 0, 255)",
	"Red Giant": "rgba(255, 69, 0, 255)",
	"Massive Star": "rgba(244, 255, 255, 255)",
	"Red Supergiant": "rgba(255, 0, 0, 255)",
	"Neutron star": "rgba(175, 238, 238, 255)",
	"Black hole": "rgba(0, 0, 0, 255)",
	Moon: "rgba(105,105,105,1)",
};

const chartOutlineColors = {
	"Dwarf Planet": "rgba(222, 184, 135, 255)",
	Terrestrial: "rgba(160, 69, 19, 255)",
	"Gas Giant": "rgba(218,165, 32, 255)",
	"Ice Giant": "rgba(70, 130, 180, 255)",
	"Black Dwarf": "rgba(32, 32, 32, 255)",
	"White Dwarf": "rgba(255, 250, 250, 255)",
	"Blue Dwarf": "rgba(135, 206, 250, 255)",
	"Red Dwarf": "rgba(255, 69, 0, 255)",
	"Planetary Nebula": "rgba(60, 179, 113, 255)",
	"Star-forming Nebula": "rgba(138, 43, 226, 255)",
	Protostar: "rgba(221, 160, 221, 255)",
	"Mid-sized star": "rgba(255, 255, 0, 255)",
	"Red Giant": "rgba(255, 69, 0, 255)",
	"Massive Star": "rgba(244, 255, 255, 255)",
	"Red Supergiant": "rgba(255, 0, 0, 255)",
	"Neutron star": "rgba(175, 238, 238, 255)",
	"Black hole": "rgba(255, 69, 0, 255)",
	Moon: "rgba(245,255,250,1)",
};

const chartSizes = {
	"Dwarf Planet": 4,
	Terrestrial: 6,
	"Gas Giant": 6,
	"Ice Giant": 6,
	"Black Dwarf": 12,
	"White Dwarf": 12,
	"Blue Dwarf": 12,
	"Red Dwarf": 12,
	"Planetary Nebula": 60,
	"Star-forming Nebula": 60,
	Protostar: 15,
	"Mid-sized star": 20,
	"Red Giant": 25,
	"Massive Star": 25,
	"Red Supergiant": 30,
	"Neutron star": 12,
	"Black hole": 12,
};

// Biome Colors
const BiomeColors = {
	"Artic Ice": {
		r: 224,
		g: 255,
		b: 255,
		a: 255,
	},
	"Artic Desert": {
		r: 216,
		g: 191,
		b: 216,
		a: 255,
	},
	"Artic Tundra": {
		r: 176,
		g: 225,
		b: 230,
		a: 255,
	},
	"Artic Tundra Hills": {
		r: 95,
		g: 158,
		b: 160,
		a: 255,
	},
	"Artic Tundra Mountains": {
		r: 47,
		g: 79,
		b: 79,
		a: 255,
	},
	"Sub Artic Beach": {
		r: 188,
		g: 143,
		b: 143,
		a: 255,
	},
	"Sub Artic Desert": {
		r: 244,
		g: 164,
		b: 96,
		a: 255,
	},
	"Sub Artic Taiga": {
		r: 152,
		g: 251,
		b: 152,
		a: 255,
	},
	"Sub Artic Hills": {
		r: 222,
		g: 184,
		b: 135,
		a: 255,
	},
	"Sub Artic Mountains": {
		r: 119,
		g: 136,
		b: 153,
		a: 255,
	},
	"Temperate Beach": {
		r: 189,
		g: 183,
		b: 107,
		a: 255,
	},
	"Temperate Swamp": {
		r: 143,
		g: 188,
		b: 143,
		a: 255,
	},
	"Temperate Desert": {
		r: 238,
		g: 232,
		b: 170,
		a: 255,
	},
	"Temperate Grasslands": {
		r: 0,
		g: 128,
		b: 0,
		a: 255,
	},
	"Temperate Forest": {
		r: 0,
		g: 100,
		b: 0,
		a: 255,
	},
	"Temperate Desert Hills": {
		r: 184,
		g: 134,
		b: 11,
		a: 255,
	},
	"Temperate Grassland Hills": {
		r: 0,
		g: 64,
		b: 0,
		a: 255,
	},
	"Temperate Forest Hills": {
		r: 0,
		g: 50,
		b: 0,
		a: 255,
	},
	"Temperate Mountains": {
		r: 112,
		g: 128,
		b: 144,
		a: 255,
	},
	"Tropical Beach": {
		r: 240,
		g: 230,
		b: 140,
		a: 255,
	},
	"Tropical Swamp": {
		r: 0,
		g: 250,
		b: 154,
		a: 255,
	},
	"Tropical Desert": {
		r: 218,
		g: 165,
		b: 32,
		a: 255,
	},
	"Tropical Shrubland": {
		r: 128,
		g: 128,
		b: 0,
		a: 255,
	},
	"Tropical Savannah": {
		r: 154,
		g: 205,
		b: 50,
		a: 255,
	},
	"Tropical Forest": {
		r: 0,
		g: 255,
		b: 127,
		a: 255,
	},
	"Tropical Rainforest": {
		r: 60,
		g: 179,
		b: 113,
		a: 255,
	},
	"Tropical Desert Hills": {
		r: 210,
		g: 180,
		b: 140,
		a: 255,
	},
	"Tropical Shrubland Hills": {
		r: 85,
		g: 107,
		b: 47,
		a: 255,
	},
	"Tropical Savannah Hills": {
		r: 107,
		g: 142,
		b: 35,
		a: 255,
	},
	"Tropical Forest Hills": {
		r: 160,
		g: 82,
		b: 45,
		a: 255,
	},
	"Tropical Rainforest Hills": {
		r: 46,
		g: 139,
		b: 87,
		a: 255,
	},
	"Tropical Mountains": {
		r: 205,
		g: 133,
		b: 63,
		a: 255,
	},
	"Deep Ocean": {
		r: 0,
		g: 0,
		b: 139,
		a: 255,
	},
	"Shallow Ocean": {
		r: 0,
		g: 0,
		b: 205,
		a: 255,
	},
	Error: {
		r: 255,
		g: 0,
		b: 255,
		a: 255,
	},
};

// Artic Ice:                 light cyan
// Artic Desert:              thistle
// Artic Tundra:              powder blue
// Artic Tundra Hills:        cadet blue
// Artic Tundra Mountains:    dark slate gray
// Sub Artic Beach:           rosy brown
// Sub Artic Desert:          sandy brown
// Sub Artic Taiga:           pale green
// Sub Artic Hills:           burly wood
// Sub Artic Mountains:       light slate gray
// Temperate Beach:           dark khaki
// Temperate Swamp:           dark sea green
// Temperate Desert:          pale golden rod
// Temperate Grasslands:      green
// Temperate Forest:          dark green
// Temperate Desert Hills:    dark golden rod
// Temperate Grassland Hills: 0.5 * green
// Temperate Forest Hills:    0.5 * dark green
// Temperate Mountains:       slate gray
// Tropical Beach:            khaki
// Tropical Swamp:            medium spring green
// Tropical Desert:           golden rod
// Tropical Shrubland:        olive
// Tropical Savannah:         yellow green
// Tropical Forest:           spring green
// Tropical Rainforest:       medium sea green
// Tropical Desert Hills:     tan
// Tropical Shrubland Hills:  dark olive green
// Tropical Savannah Hills:   olive drab
// Tropical Forest Hills:     sienna
// Tropical Rainforest Hills: sea green
// Tropical Mountains:        peru
// Deep Ocean:                dark blue
// Shallow Ocean:             medium blue
// Error:                     magenta
