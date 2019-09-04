const Discord = require('discord.js');
const client = new Discord.Client();

const { ping } = require("./messageUtilities/pings/ping.js");
const { command } = require("./messageUtilities/commands/command.js");
const { fortune } = require("./messageUtilities/fortunes/fortune.js");
const config = require("./config.json");

const games = [`Metal Gear Survive 2: Lords of Dust`, 'Silent Hillz', 'Metal Gear Rising Deux: Les Louves des Épée', 'Metal Gear: Ghost Babel', 'Metal Gear Solid 6: Widow of Cipher', 'Zone of the Enders III: Shadow of Callisto', 'Snatcher 3: Bioroids Divided', 'Castlevania Judgement 2', 'Pro Evolution Soccer 2004',  'Death Stranding II: Genesis Nova'];

client.on("ready", () => {
  client.user.setGame(games[Math.floor(Math.random() * 10)])
});

client.on("message", async message => {

  if (message.author.bot) return;

  const type = message.content[0];

  if (type === config.pingPrefix) {
    const messageToDisplay = ping(message);
    if (!messageToDisplay) {
      message.delete(4000).catch(()=>{});
      message.channel.send("Who's that? They must be friends with Quattro Bajeena...");
    }
    message.channel.send(messageToDisplay);
  }

  else if (type === config.cmdPrefix) {
    const commandToDisplay = command(message);
    message.channel.send(commandToDisplay)
  }

  else if (type === config.fortunePrefix) {
    const fortuneToDisplay = fortune(message);
    message.channel.send(fortuneToDisplay);
  }

  return;
});

client.login(config.token);
