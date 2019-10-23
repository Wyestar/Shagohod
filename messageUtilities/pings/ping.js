const nicknames = ["jeff", "jef", "geff", "gef", "geoff", "jeffrey", "gev", "gef"];

const ping = (message) => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === 'here' || command === 'everyone') {
		return message;
	}

	if (nicknames.indexOf(command) >= 0) {
		return message.member.nickname + " says: <@96084289279500288> " + args.join(" ");
	}

	return null;
}

module.exports = {
	ping
}