const Discord = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero');
var cooldown = new Set();

module.exports = {
	name: 'work',
	alias: ['job'],

execute (client, message, args) {

if(cooldown.has(message.author.id)) return message.reply("Tienes que esperar 15 minutos desde el último uso para volver a usar este comando.");

  cooldown.add(message.author.id);

  setTimeout(() => {
    cooldown.delete(message.author)
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