const Discord = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero_s');
var cooldown = new Set();

module.exports = {
	name: 'work-s',
	alias: ['job-s'],

execute (client, message, args) {

var utoken = `${message.guild.id}${message.author.id}`;
  
if(cooldown.has(utoken)) return message.reply("Tienes que esperar 15 minutos desde el último uso para volver a usar este comando.");

  cooldown.add(utoken);

  setTimeout(() => {
    cooldown.delete(utoken)
  }, 900000);
  
	if(!dinero.tiene(utoken)) {
   dinero.establecer(utoken, `0`)
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

dinero.sumar(utoken, `${gana}`);

  }
}