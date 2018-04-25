const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  // randomize game?
  const games = [`Metal Gear Survive 2: Lords of Dust`, 'Metal Gear Pachinko', 'Metal Gear: Ghost Babel', 'Metal Gear Solid 6: Widow of Cipher', 'Snatcher 3: Bioroids Divided'];
  const random = Math.floor(Math.random() * 5);
  client.user.setGame(games[random]);
});

client.on("message", async message => {
  // searches each message for prompts at beginning

  if(message.author.bot) return;

  // early return for any non-command messages, does not work with multiple prefixes now
  // can set multiple conditions if message[0] is not any command prompts
  // if(message.content.indexOf(config.ping_prefix) !== 0) return;

  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // add string parser?
  if(message.content.indexOf(config.ping_prefix) === 0) {
    if(command === "jeff" || command === "jef" || command === "geff" || command === "gef" || command === "geoff" || command === "jeffrey" || command === "gev") {
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

  // may combine shop and fortune, pipe in if to catch either command
  else if(message.content.indexOf(config.shop_prefix) === 0) {
    if(command === "shop") {
      message.channel.send("We're not open for business yet, come back another time. If you want to use the bathroom, it's in the back...");
    }
    else if(commant === "balance") {
      message.channel.send("Not even Drebin has any Drebin points yet.");
    }
  }

  else if(message.content.indexOf(config.fortune_prefix) === 0) {

    if(command === "sunny" || command === "eggs") {
      message.channel.send("https://static.giantbomb.com/uploads/original/0/2020/941695-2573736726_af67ec3b18_o.jpg")
    }
    else if(command === "explain") {
      message.channel.send("This _ feature, brought to you by Solis Space & Aeronautics")
    }
  }

  return;
});

client.login(config.token);
