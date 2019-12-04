const nicknames = ["jeff", "jef", "geff", "gef", "geoff", "jeffrey", "gev", "gef"];

const ping = (message) => {
	const messageCopy = message.content;
	const msgSections = messageCopy.split(/ +/g);
	for (let i = 0; i < msgSections.length; i++) {
		if (msgSections[i][0] === '@') {
			if (nicknames.indexOf(msgSections[i].slice(1)) >= 0) {
				// move this check against array constant to before for loop?
				msgSections[i] = '<@96084289279500288>';
				const reconstruction = msgSections.join(" ");
				return message.member.nickname + ": " + reconstruction;
			}
			if (msgSections[i].slice(1) === 'everyone' || msgSections[i].slice(1) === 'here') {
				return message.content;
			}
		}
	}

	return null;
}

module.exports = {
	ping
}