const Discord = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero');

let cooldown = new Set();

module.exports = {
	name: 'work',
	alias: ['job'],

execute (client, message, args) {

if(cooldown.has(message.author.id)){
	message.reply({ content: "Debes esperar 15 min después de el último uso." })

	return;
}

	cooldown.add(message.author.id);

	setTimeout(() => {
		cooldown.delete()
	}, 900000);

	if(!dinero.tiene(message.author.id)) {
   dinero.establecer(message.author.id, `0`)
	}

var jobs = [
	"Doctor", "Bombrero", "Programador", "Actor", "Mecánico"
];

var rjobs = jobs[Math.floor(Math.random() * jobs.length)];

	var gana = Math.floor(Math.random() * 250) + 150;

	const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
	.setDescription(`Has trabajado de **${rjobs}** y ganaste **${gana}**`)
.setTimestamp()
	.setColor('RANDOM')

message.reply({ embeds: [embed] })

dinero.sumar(message.author.id, `${gana}`);

  }
}