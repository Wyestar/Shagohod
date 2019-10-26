const Discord = require('discord.js');
const client = new Discord.Client();

const { ping } = require("./messageUtilities/pings/ping.js");
const { command } = require("./messageUtilities/commands/command.js");
const { fortune } = require("./messageUtilities/fortunes/fortune.js");
const config = require("./config.json");

const games = [`Metal Gear Survive 2: Lords of Dust`, 'Silent Hillz', 'Metal Gear Rising Deux: Les Louves des Épée', 'Metal Gear: Ghost Babel', 'Metal Gear Solid 6: Widow of Cipher', 'Zone of the Enders III: Shadow of Callisto', 'Snatcher 3: Bioroids Divided', 'Castlevania Judgement 2', 'Pro Evolution Soccer 2004',  'Death Stranding II: Genesis Nova', 'Contra: Rogue Corps 2', 'Dance Dance Revolution: B20'];

client.on("ready", () => {
  const gameName = games[Math.floor(Math.random() * 10)];
  client.user.setPresence({ game: { name: gameName }, status: 'active' }).catch(()=>{});
  // client.user.setGame(games[Math.floor(Math.random() * 10)])
});

//clinet.on()
//disconnect, initiate reconnect

client.on("message", async message => {

  if (message.author.bot) return;

  const type = message.content[0];

  if (message.content.length <= 1) {
    return;
  }

  if (type === config.pingPrefix) {
    const messageToDisplay = ping(message);
    if (messageToDisplay) {
      if (messageToDisplay.length > 0) {
        message.channel.send(messageToDisplay);
      }
      return;
    }
    if (!messageToDisplay) {
      message.delete(4000).catch(()=>{});
      message.channel.send("Who's that? They must be friends with Iroquois Pliskin...");
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

client.login(config.token).catch(()=>{});;
