const Discord = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero_s');
const dinerobanco = new db.crearDB('dinerobanco_s');

module.exports = {
	name: 'bal-s',
	alias: ['money-s'],

async execute (client, message, args) {

const usuario_id = message.mentions.users.first() || message.author;

  const usuario = `${message.guild.id}${usuario_id.id}`;

	
if(!dinero.tiene(usuario)){
	dinero.establecer(usuario, 0)
}

if(!dinerobanco.tiene(usuario)){
 dinerobanco.establecer(usuario, 0)
}

const dinerobancoT = await dinerobanco.obtener(usuario);
	
const dineroT = await dinero.obtener(usuario);

const total = parseInt(dineroT) + parseInt(dinerobancoT);

	const embed = new Discord.MessageEmbed()
	.setAuthor("Balance de " + usuario_id.tag, usuario_id.displayAvatarURL())
	.addField("Dinero fuera del banco:", `${dineroT}`)
.addField("Dinero dentro del banco:", `${dinerobancoT}`)
.addField("TOTAL:", `${total}`)
	.setColor('RANDOM')

	message.reply({ embeds: [embed] })
	
  }
}