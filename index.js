const express = require('express');
const fs = require('fs');
const app = require('./server/express.js');
const Discord = require('discord.js');
const { Collection } = require('discord.js');
const client = new Discord.Client({ intents: 32735 });

//los números en los intents valen por todos los intents

//↑ Necesario //

client.commands = new Collection();

// ↓ command handler //

const commandFiles = fs
	.readdirSync('./comandos')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	client.commands.set(command.name, command);
}

const EcommandFiles = fs
	.readdirSync('./comandos/economia')
	.filter(file => file.endsWith('.js'));

for (const file of EcommandFiles) {
	const command = require(`./comandos/economia/${file}`);
	client.commands.set(command.name, command);
}

const CcommandFiles = fs
	.readdirSync('./comandos/configuracion')
	.filter(file => file.endsWith('.js'));

for (const file of CcommandFiles) {
	const command = require(`./comandos/configuracion/${file}`);
	client.commands.set(command.name, command);
}

const NcommandFiles = fs
	.readdirSync('./comandos/normales')
	.filter(file => file.endsWith('.js'));

for (const file of NcommandFiles) {
	const command = require(`./comandos/normales/${file}`);
	client.commands.set(command.name, command);
}

const McommandFiles = fs
	.readdirSync('./comandos/mod')
	.filter(file => file.endsWith('.js'));

for (const file of McommandFiles) {
	const command = require(`./comandos/mod/${file}`);
	client.commands.set(command.name, command);
}

// ↓ Event Handler //

const { readdirSync } = require('fs');
const path = require('path');

const eventos = readdirSync(path.join(__dirname, 'eventos'));

for(const file of eventos){
const evento = require(path.join(__dirname, 'eventos', file));

client.on(evento.name, (...args) => evento.run(client, ...args));
}
					
//↓ Client login //

client.login(process.env.TOKEN);
