const Discord = require('discord.js');

module.exports = {
	name: 'menu',
	alias: [],

	async execute (client, message, args) {

const embed = new Discord.MessageEmbed()
		.setTitle("Xd")
.setDescription("hola")
.setColor("RANDOM")

		const embed2 = new Discord.MessageEmbed()
		.setTitle("Titulo")
.setDescription("XD")
.setColor("RANDOM")

		const embed3 = new Discord.MessageEmbed()
		.setTitle("ping")
.setDescription(`${client.ws.ping}`)
.setColor("RANDOM")

  const menu = new Discord.MessageActionRow()
.addComponents(
	new Discord.MessageSelectMenu()
.setCustomId("menu")
.setMaxValues(1)
.setPlaceholder('Selecciona...')
.addOptions([
	{
		label: "hola",
		description: "XD",
    value: "1"
	},
	{
		label: "Ping",
    description: "Ve mi latencia!",
		value: "2"
	}
])
)
		
const msg = await message.channel.send({
  embeds: [embed2],
	components: [menu]
})

const ifilter = i => i.user.id === message.author.id;
		
const collector = msg.createMessageComponentCollector({ filter: ifilter, time: 180000 })

collector.on('collect', async i => {
if(i.values[0] === '1'){
await i.deferUpdate()
 i.editReply({ embeds: [embed], components: [] })
}
	if(i.values[0] === '2'){
await i.deferUpdate()
 i.editReply({ embeds: [embed3], components: [] })
	}
})

  }
}