const axios = require('axios');
// axios.defaults.baseURL = 'https://www.googleapis.com';
// axios.defaults.headers.common['Authorization'] = '251300381219';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const fortuneStatic = require("./fortuneStatic.json");
const fortuneCloud = require("./fortuneCloud.json");

const getFortunesFromS3 = () => {
	return axios.get('https://shagohod-fortune.s3.us-east-2.amazonaws.com/fortuneCloud.json').then(response => {
		console.error('res data111: ', response.data)
		return response.data
	})
}

	// let data = null;
	// try {
	// 	const res = await axios.get('https://shagohod-fortune.s3.us-east-2.amazonaws.com/fortuneCloud.json');
	// 	console.error('res data: ', res.data);
	// 	data = res.data;
	// } catch (err) {
	// 	console.error(err)
	// }
	// console.error('f data: ', data);
	//
	// return data;
// };

// const getUserFortune = (id) => {
// 	const fortunes = getFortunesFromS3().then(res => res).catch(err => err);
//
// 	console.error('fortunes222: ', fortunes)
// 	return fortunes;
// };

const fortune = async (message) => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === "collude") {
		if (message.author.id === "96084289279500288") {
			let test = null;
			await getFortunesFromS3().then(data => {
				console.error('data222: ', data);
				test = data;
			});
			console.error('s3 test final: ', test);
			const amount = fortuneCloud["96084289279500288"];
			return "Collusion successful; Gev now has " + amount + " Drebin Points";
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