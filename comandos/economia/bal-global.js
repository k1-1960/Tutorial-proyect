const Discord = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero');
const dinerobanco = new db.crearDB('dinerobanco');

module.exports = {
	name: 'bal',
	alias: ['money'],

async execute (client, message, args) {

const usuario = message.mentions.users.first() || message.author;
	
if(!dinero.tiene(usuario.id)){
	dinero.establecer(usuario.id, 0)
}

if(!dinerobanco.tiene(usuario.id)){
 dinerobanco.establecer(usuario.id, 0)
}

const dinerobancoT = await dinerobanco.obtener(usuario.id);
	
const dineroT = await dinero.obtener(usuario.id);

const total = parseInt(dineroT) + parseInt(dinerobancoT);

	const embed = new Discord.MessageEmbed()
	.setAuthor("Balance de " + usuario.tag, usuario.displayAvatarURL())
	.addField("Dinero fuera del banco:", `${dineroT}`)
.addField("Dinero dentro del banco:", `${dinerobancoT}`)
.addField("TOTAL:", `${total}`)
	.setColor('RANDOM')

	message.reply({ embeds: [embed] })
	
  }
}