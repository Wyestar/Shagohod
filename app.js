const Discord = require('discord.js');
const client = new Discord.Client();

const { ping } = require("./messageUtilities/pings/ping.js");
const { command } = require("./messageUtilities/commands/command.js");
const { fortune } = require("./messageUtilities/fortunes/fortune.js");

const { token, pingPrefix, cmdPrefix } = require("./config.json");

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

client.on("ready", () => {
  let gameName = games[Math.floor(Math.random() * games.length)];
  if (!gameName) {
    gameName = games[Math.floor(Math.random() * 10)];
  }
  console.log('gamename: ', gameName);
  client.user.setActivity(gameName, { type: 'PLAYING' }).catch(() => {});  
});

client.on("message", async (message) => {
  // message.guild.members.cache.forEach(m => console.log('member', m.user))

  // msg.cnt.startsWith()

  // console.log('server info3: ', message.client.guilds.constructor.name);
  // console.log('server info user: ', message.guild.members.user);

  // message.channel.send('server info test3');
  // message.author 
  // message.mentions.users

  if (message.author.bot || message.content.length <= 1) return;

  // prefix
  // const type = message.content[0];

  if (message.content.indexOf(pingPrefix) >= 0) {
    const messageToDisplay = ping(message);
    if (messageToDisplay) {
        message.channel.send(messageToDisplay);
    }
    if (!messageToDisplay) {
      // message.delete(6000)
      // .catch(()=>{});
    }
  }

  else if (message.content.indexOf(cmdPrefix) === 0) {
    const commandToDisplay = command(message);
    message.channel.send(commandToDisplay).catch(()=>{});
  }

  // else if (type === config.fortunePrefix) {
  //   const fortuneToDisplay = fortune(message);
  //   message.channel.send(fortuneToDisplay);
  // }
});

client.login(token).catch(()=>{});
