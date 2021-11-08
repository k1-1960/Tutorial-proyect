const Discord = require('discord.js');
const db = require('megadb');
const prefix_db = new db.crearDB('prefix');

module.exports = {
	name: 'messageCreate',
	async run (client, message) {

const { globalprefix } = require('../config.json');

let prefix;

  if(prefix_db.tiene(message.guild.id)){
    prefix = await prefix_db.obtener(message.guild.id)
  } else {
    prefix = globalprefix;
  }

if(message.channel.type === "dm") return;
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase()

let cmd = client.commands.find(
		c => c.name === command || (c.alias && c.alias.includes(command))
	);
	
if(cmd) {
	  cmd.execute(client, message, args);
	}


  }
}