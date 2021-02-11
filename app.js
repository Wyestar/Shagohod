const Discord = require('discord.js');
const client = new Discord.Client();

const { ping } = require("./messageUtilities/pings/ping.js");
const { command } = require("./messageUtilities/commands/command.js");
const { fortune } = require("./messageUtilities/fortunes/fortune.js");

const config = require("./config.json");

const games = [
  'Silent Hillz',
  `Metal Gear Survive 2: Lords of Dust`,
  'Metal Gear Rising Deux: Les Louves des Épée',
  'Metal Gear: Ghost Babel',
  'Metal Gear Solid 6: Widow of Cipher',
  'Zone of the Enders III: Shadow of Callisto',
  'Snatcher 3: Bioroids Divided',
  'Castlevania Judgement 2',
  'Pro Evolution Soccer 2004',
  'Death Stranding II: Genesis Nova',
  'Contra: Rogue Corps 2',
  'Dance Dance Revolution: B20',
  'Project: Project X Zone',
  'Gradius Mobile',
];

client.once("ready", () => {
  const gameName = games[Math.floor(Math.random() * 10)];
  client.user.setPresence({ game: { name: gameName }, status: 'active' }).catch(()=>{});
});

//clinet.on()
//disconnect, initiate reconnect

client.on("message", async message => {

  if (message.author.bot || message.content.length <= 1) return;

  // prefix
  const type = message.content[0];

  if (message.content.indexOf(config.pingPrefix) >= 0) {
    const messageToDisplay = ping(message);
    if (messageToDisplay) {
        message.channel.send(messageToDisplay);
    }
    // if (messageToDisplay === 'punctuation') {}
    if (!messageToDisplay) {
      message.delete(6000).catch(()=>{});
      message.channel.send("Iroquois Pliskin is unavailable...");
    }
    // message.channel.send(messageToDisplay);
  }

  else if (type === config.cmdPrefix) {
    const commandToDisplay = command(message);
    message.channel.send(commandToDisplay)
  }

  // else if (type === config.fortunePrefix) {
  //   const fortuneToDisplay = fortune(message);
  //   message.channel.send(fortuneToDisplay);
  // }
});

client.login(config.token).catch(()=>{});;
