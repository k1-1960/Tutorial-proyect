const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	alias: [],

	execute (client, message, args) {

  var perms = message.member.permissions.has("ADMINISTRATOR");
if(!perms) return message.reply({ content: "No tienes permisos suficientes!" })

		const usuario = message.mentions.members.first();
		
		if(!usuario) return message.reply('Debes mencionar a el usuario');

		if(usuario.id === message.author.id){
			message.reply('No puedes expulsarte a ti mismo.')

			return;
		}

		var razon = args.slice(1).join(' ');
		if(!razon){
			razon = 'No especificado';
		}

		if(message.member.roles.highest.comparePositionTo(usuario.roles.highest) <= 0) return message.reply('El usuario tiene un rol de mismo nivel o superior al tuyo!');

		usuario.kick(razon);

message.reply(`Has expulsado a ${usuario.user.tag} del servidor.`)
		
  }
}