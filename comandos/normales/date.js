const Discord = require('discord.js');
var ujsk = require('utiljs-k');

module.exports = {
  name: 'date',
  alias: [],
 async execute (client, message, args) {

   message.reply(`${await ujsk.fecha}`)
    
  }
}