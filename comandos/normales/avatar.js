const Discord = require('discord.js');

module.exports = {
  name: "avatar",
  alias: ["icon"],

execute (client, message, args){

  const usuario = message.mentions.users.first() || message.author;

	const embed = new Discord.MessageEmbed()

	.setAuthor("Avatar de " + usuario.tag)
	.setDescription(`[Ver imagen](${usuario.displayAvatarURL({ size: 1024, dynamic: true })})`)
	.setImage(usuario.displayAvatarURL({ size: 1024, dynamic: true }))
	.setColor("BLUE")
.setTimestamp()

	message.reply({ embeds: [embed] })
		
 }

} 