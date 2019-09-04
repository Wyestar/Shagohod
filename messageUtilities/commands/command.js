const command = (message) => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (message.author.id === '96749063118008320' && command === 'pee') {
		return "poop";
	}

	if (command === "info" || command === "help" || command === "commands") {
		return "Go home and brush your teeth.";
	}

	return "Nanomachines, son."
}

module.exports = {
	command
}