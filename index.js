const Discord = require('discord.js');
const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});
const token = require("./token.js");

var prefix = "."
var mention = "<@762659603543752704>"

client.login(token)