const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  client.user.setGame(`Metal Gear Survive 2: Lords of Dust`);
});

client.on("message", async message => {
  // searches each message for '@' at beginning

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "jeff" || command === "jef" || command === "geff" || command === "gef" || command === "geoff" || command === "jeffrey" || command === "gev") {
    const display_name = message.member.nickname;

    const yo_jeff = display_name + " says: <@96084289279500288> " + args.join(" ");

    // message.delete().catch(^_^=>{});
    message.channel.send(yo_jeff);
  }

  if(command === "iroquoispliskin") {
    message.delete(3000).catch(()=>{});
    message.channel.send("Who's that? They must be friends with Quattro Bajeena...")
  }

  // if(command === "sunshine") {
  //   // import gif of Sunny Emerich
  //   message.channel.send("Sunny", {
  //     file:
  //   })
  //
  //   // attachment is path to file location
  //   Client.sendFile(message.channel, attachment)
  // }
});

client.login(config.token);
