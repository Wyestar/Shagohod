import bank from "./bank.json";

export const fortune() {
	// cloud json storage
	// https://api.myjson.com/bins/bla6f
	const jsonBinId = "bla6f";
	console.log('msg content: ', message.content);

	// get req to json with: "https://api.myjson.com/bins/${jsonBinId}"

	if (command === "sunny" || command === "eggs") {
		return bank.sunny;
	}
	else if (command === "explain") {
		return bank.wip;
	}
}