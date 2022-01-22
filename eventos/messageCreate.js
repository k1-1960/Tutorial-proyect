const Discord = require('discord.js');
const db = require('megadb');
const prefix_db = new db.crearDB('prefix');
const { send_error } = require('../funciones_mias/send_error.js');

module.exports = { //abremos "module.exports" para usar estos datos en el "event handler"
	name: 'messageCreate',//nombre de el evento.
	async run (client, message) { //executamos evento
    try { // usamos "try" para poder usar "catch"
      //si el canal es de DM retorna nada.
if(message.channel.type === 1) return;
      //obteniendo el prefix
const { globalprefix } = require('../config.json');
//declarando el prefix
let prefix = prefix_db.obtener(message.guild.id) || globalprefix;
//si el autor es bot que no retorne nada.
if(message.author.bot) return;
      //si el mensaje no empieza por el prefix que no retorne nada
if(!message.content.startsWith(prefix)) return;

//definimos "args"
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase()

     //definimos el comando
let cmd = client.commands.find(
		c => c.name === command || (c.alias && c.alias.includes(command))
	);
	//comprobamos si existe el comando:/abrimos "if(cmd)"
if(cmd) {
  //ejecutamos el comando
	  cmd.execute(client, message, args)
      .catch(err => {
      send_error(client, "tuid", err);
        return;
        //↑ anti-apagones por errores en el comando (.catch)
    });
	}//cerramos "if(cmd)"


   }//cerramos "try"
    catch (err) {
      send_error(client, "tuid", err);
      return;
      //↑ anti-apagones por errores en el evento (.catch)
    } //cerramos "catch"
 } //cerramos "run"
} //cerramos "module.exports"
