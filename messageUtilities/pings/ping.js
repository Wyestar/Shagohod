const nicknames = ["jeff", "jef", "geff", "gef", "geoff", "jeffrey"];

const gev = "gev";

const ping = (message) => {
	const messageCopy = message.content;
	// text input
	// qwer @jeff asdf
	// qwer @__ asdf

	const msgSections = messageCopy.trim().split(/ +/g);
	for (let i = 0; i < msgSections.length; i++) {
		if (msgSections[i][0] === '@') {
			if (nicknames.indexOf(msgSections[i].slice(1)) >= 0) {
				msgSections[i] = '<@96084289279500288>';
				const msgReconstruction = msgSections.join(" ");
				return message.member.nickname + ": " + msgReconstruction;
			}
			if (msgSections[i].includes(gev)) {
				return "Iroquois Pliskin is not who you are looking for...";
			}
			// if (msgSections[i].slice(1) === 'everyone' || msgSections[i].slice(1) === 'here') {
			// 	return null;
			// }
		}
	}

	return null;
}

module.exports = {
	ping
}