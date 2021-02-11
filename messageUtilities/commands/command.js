const command = (message) => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (message.author.id === '96749063118008320' && (command === 'pee' || command === 'pp')) {
		return "poop";
	}

	if (message.author.id === '80863497977597952' && (command === 'poop' || command === "poo")) {
		return "pee";
	}

	if (message.author.id === '96084289279500288' && command === 'paz') {
		return `https://www.youtube.com/watch?v=Gbe_HIL46lY`;
	}

	if (command === "info" || command === "help" || command === "commands") {
		return "No one quite knows who or what they are.";
	}

	if (!command[0].match(`^[A-Za-z0-9]*$`)) {
		// ^[A-Za-z0-9]*$
		// regex to match first char as alphanumeric
		// prevent commands like '!!!' from being caught

		return null;
	}

	return "Nanomachines, son."
}

module.exports = {
	command
}