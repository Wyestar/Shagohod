const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  client.user.setGame(`Metal Gear Survive 2: Lords of Dust`);
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "jeff") {
    const sender = message.author.username;
    const sayMessage = sender + " says: <@96084289279500288> " + args.join(" ");

    // message.delete().catch(^_^=>{});

    message.channel.send(sayMessage);
  }
});

client.login(config.token);
