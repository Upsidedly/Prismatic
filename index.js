const Discord = require('discord.js');
const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});
import { token } from './token'

var prefix = "."
var mention = "<@762659603543752704>"

client.login(token)