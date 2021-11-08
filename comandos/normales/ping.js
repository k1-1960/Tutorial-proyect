const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	alias: [],

	execute(client, message, args) {

message.reply({ content: `${client.ws.ping}ms` })

  }
}