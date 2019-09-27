const axios = require('axios');
// axios.defaults.baseURL = 'https://www.googleapis.com';
// axios.defaults.headers.common['Authorization'] = '251300381219';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const fortuneStatic = require("./fortuneStatic.json");
const fortuneCloud = require("./fortuneCloud.json");

const getFortunesFromS3 = async () => {
	let data = {};
	await axios.get('https://shagohod-fortune.s3.us-east-2.amazonaws.com/fortuneCloud.json').then(response => {
		// console.error('res data111: ', response.data)
		data = response.data;
	});
	console.error('res data: ', data);
	return data;
};

const getUserFortune = (id) => {
	const fortunes = getFortunesFromS3();
	console.error('fortunes222: ', fortunes);
	return fortunes[id];
};

const bet = (id) => {
	// add rng wagers
}

const escapeBankruptcy = (id) => {
	// grant 100, add to bail out counter
}

const fortune = (message) => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === "collude") {
		if (message.author.id === "96084289279500288") {
			let test = getUserFortune(message.author.id);
			console.error('s3 test final: ', test);
			const amount = fortuneCloud["96084289279500288"]["values"] + 10;
			// console.error('s3 amount final: ', amount);

			return "Collusion successful; Gev now has "+amount+" Drebin Points";
		}

		return "You can not collude."
	}

	if (command === "amount") {
		return "What makes you think you'd have any Drebin Points?"
	}

	if (command === "sunny" || command === "eggs") {
		return fortuneStatic.sunny;
	}

	return fortuneStatic.wip
}

module.exports = {
	fortune
}