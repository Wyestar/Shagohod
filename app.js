const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  client.user.setGame(`Metal Gear Survive 2: Lords of Dust`);
});

client.on("message", async message => {
  // searches each message for '@' or '!' at beginning

  if(message.author.bot) return;

  // early return for any non-command messages, does not work with multiple prefixes now
  // if(message.content.indexOf(config.ping_prefix) !== 0) return;

  if(message.content.indexOf(config.ping_prefix) === 0) {
    const args = message.content.slice(config.ping_prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "jeff" || command === "jef" || command === "geff" || command === "gef" || command === "geoff" || command === "jeffrey" || command === "gev") {
      const display_name = message.member.nickname;
      const yo_jeff = display_name + " says: <@96084289279500288> " + args.join(" ");

      // message.delete().catch(^_^=>{});
      message.channel.send(yo_jeff);
    }
    else if(command === "iroquoispliskin") {
      message.delete(3000).catch(()=>{});
      message.channel.send("Who's that? They must be friends with Quattro Bajeena...")
    }
  }

  else if(message.content.indexOf(config.cmd_prefix) === 0) {
    const args = message.content.slice(config.ping_prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "info" || command === "help" || command === "commands") {
      message.channel.send("Go home and be a family man.");
    }
  }

  else if(message.content.indexOf(shop.cmd_prefix) === 0) {
    const args = message.content.slice(config.ping_prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "shop") {
      message.channel.send("We're not open for business yet, come back another time. If you want to use the bathroom, it's in the back...");
    }
    else if(commant === "balance") {
      message.channel.send("Not even Drebin has any Drebin points yet.");
    }
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

  return;
});

client.login(config.token);
