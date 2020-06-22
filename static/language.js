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
