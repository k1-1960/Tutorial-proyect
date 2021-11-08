const Discord = require('discord.js');
const db = require('megadb');
const prefix_db = new db.crearDB('prefix');

module.exports = {
  name: "setprefix",
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has("ADMINISTRATOR");
if(!perms) return message.reply({ content: "No tienes permisos suficientes!" })

  if(!args[0]) return message.reply({ content: "Esto no puede estar vacio!" })

  if(args[1]) return message.reply({ content: "Esto no puede contener espacios!" })

  message.reply({ content: `Mi prefix ha sido cambiado a \`${args[0]}\``})

  prefix_db.establecer(message.guild.id, args[0])

 }

	}