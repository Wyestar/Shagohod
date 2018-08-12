const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  const games = [`Metal Gear Survive 2: Lords of Dust`, 'Silent Hillz', 'Metal Gear Rising Deux: Les Enfants des Épée (Lightning Bolt Action)', 'Metal Gear Pachinko', 'Metal Gear: Ghost Babel', 'Metal Gear Solid 6: Widow of Cipher', 'Zone of the Enders III: Shadow of Callisto', 'Snatcher 3: Bioroids Divided', 'Castlevania Judgement 2', 'Pro Evolution Soccer 2004', 'International Superstar Soccer 2', 'Death Stranding II: Genesis Nova'];
  const random = Math.floor(Math.random() * 11);
  client.user.setGame(games[random]);
});

client.on("message", async message => {
  // searches each message for prefixes at beginning

  if(message.author.bot) return;

  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(message.content.indexOf(config.ping_prefix) === 0) {
    if(command === "jeff" || command === "jef" || command === "geff" || command === "gef" || command === "geoff" || command === "jeffrey" || command === "gev" || command === "gef") {
      const display_name = message.member.nickname;
      const yo_jeff = display_name + " says: <@96084289279500288> " + args.join(" ");
      message.channel.send(yo_jeff);
    }
    else if(command === "iroquoispliskin") {
      message.delete(3000).catch(()=>{});
      message.channel.send("Who's that? They must be friends with Quattro Bajeena...")
    }
  }

  else if(message.content.indexOf(config.cmd_prefix) === 0) {
    if(command === "info" || command === "help" || command === "commands") {
      message.channel.send("Go home and be a family man.");
    }
  }

  // shop feature
  else if(message.content.indexOf(config.fortune_prefix) === 0) {

    if(command === "sunny" || command === "eggs") {
      message.channel.send("https://static.giantbomb.com/uploads/original/0/2020/941695-2573736726_af67ec3b18_o.jpg")
    }
    else if(command === "explain") {
      message.channel.send("This speculative fortune feature is brought to you by Solis Space & Aeronautics")
    }
  }

  return;
});

client.login(config.token);
