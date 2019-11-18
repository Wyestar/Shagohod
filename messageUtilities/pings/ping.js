const nicknames = ["jeff", "jef", "geff", "gef", "geoff", "jeffrey", "gev", "gef"];

const ping = (message) => {

	// replace @jeff with @gev, reconstruct message
	const originalMessage = message;
	const msgSections = originalMessage.split(/ +/g);
	msgSections.forEach(section => {
		nicknames.forEach(nickname => {
			if (('@'+nickname) === section) {
				// @jeff tag found in message
				// replace and reconstruct
			}
		})
	})

	nicknames.forEach(elem => {
		if (originalMessage.includes('@'+elem)) {
			return message.member.nickname + ": <@96084289279500288> " + originalMessage;

		}
	});

	// group tag functionality
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === 'here' || command === 'everyone') {
		return true;
	}

	// if (nicknames.indexOf(command) >= 0) {
	// 	return message.member.nickname + " says: <@96084289279500288> " + args.join(" ");
	// }

	return null;
}

module.exports = {
	ping
}