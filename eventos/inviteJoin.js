module.exports = {
	name: "inviteJoin",
	run(client, member, invite, inviter) {

		if(member.guild.id === "887541779858067476"){
		
  client.channels.cache.get("903856548932091955").send({ content: `${member} ha sido invitado por ${inviter.tag}. Su invitacion tiene ahora ${invite.uses} Usos` })
}
		
  }
}