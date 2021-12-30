const Discord = require("discord.js");
const db = require('megadb');
const dinero = new db.crearDB('dinero');
const dinerobanco = new db.crearDB('dinerobanco');

module.exports = {
	name: 'dep',
	alias: [],

	async execute (client, message, args) {

const total = parseInt(await dinero.obtener(message.author.id));

		const cantidad = parseInt(args[0]);

if(args[0] === "all"){
	dinero.restar(message.author.id, total);
	dinerobanco.sumar(message.author.id, total)

	message.reply(`Has depositado ${total} en el banco.`)
	return;
}


		
		if(cantidad > total){
			return message.reply(`No puedes depositar mas de lo que tienes.`)
		}
                if(cantidad < 0){
                 return message.reply(`La cantidad debe ser mayor a 0`)
}
		if(cantidad === 0){
			return message.reply(`La cantidad debe ser mayor a 0`)
		}
	
	dinero.restar(message.author.id, cantidad);
	dinerobanco.sumar(message.author.id, cantidad);

		message.reply(`Has depositado ${cantidad} en el banco.`)

  }
}
