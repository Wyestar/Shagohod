// const axios = require('axios');
// axios.defaults.baseURL = 'https://www.googleapis.com';
// axios.defaults.headers.common['Authorization'] = '251300381219';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const fortuneStatic = require("./fortuneStatic.json");
const fortuneCloud = require("./fortuneCloud.json");

const fortune = (message) => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === "collude") {
		if (message.author.id === "96084289279500288") {
			const amount = fortuneCloud["96084289279500288"] + 10;

			return "Collusion successful; Gev now has " + amount + "Drebin Points";
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