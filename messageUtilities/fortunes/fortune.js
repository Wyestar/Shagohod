// const axios = require('axios');
// axios.defaults.baseURL = 'https://www.googleapis.com';
// axios.defaults.headers.common['Authorization'] = '251300381219';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const fortuneStatic = require("./fortuneStatic.json");

const fortune = (message) => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === "sunny" || command === "eggs") {
		return fortuneStatic.sunny;
	}

	return fortuneStatic.wip
}

module.exports = {
	fortune
}