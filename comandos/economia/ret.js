const Discord = require("discord.js");
const db = require('megadb');
const dinero = new db.crearDB('dinero');
const dinerobanco = new db.crearDB('dinerobanco');

module.exports = {
	name: 'ret',
	alias: [],

	async execute (client, message, args) {

const total = parseInt(await dinerobanco.obtener(message.author.id));

		const cantidad = parseInt(args[0]);

if(args[0] === "all"){
	dinerobanco.restar(message.author.id, total);
	dinero.sumar(message.author.id, total)

	message.reply(`Has retirado ${total} del banco.`)
	return;
}


		
		if(cantidad > total){
			return message.reply(`No puedes retirar mas de lo que tienes.`)
		}

		if(cantidad === 0){
			return message.reply(`La cantidad debe ser mayor a 0`)
		}
	
	dinerobanco.restar(message.author.id, cantidad);
	dinero.sumar(message.author.id, cantidad);

		message.reply(`Has retirado ${cantidad} del banco.`)

  }
}