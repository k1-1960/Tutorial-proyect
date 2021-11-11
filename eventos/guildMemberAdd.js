const Discord = require('discord.js');


module.exports = {
	name: 'guildMemberAdd',
	run (client, member) {
		console.log(`${member.user.tag}`)
	}
}