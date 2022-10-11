const { IPaddress } = require('../config.json');
const { SlashCommandBuilder } = require('discord.js');
http = require('node:http');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roomba_status')
		.setDescription('Where is Roomba currently headed?'),
	async execute(interaction) {
		var message = '';
		await http.get({
			hostname: IPaddress,
			port: 8080,
			path: '/roomba_status',
			agent: false
		}, (res) => {
			var body = '';
			res.setEncoding('utf8');
			res.on('data', function(chunk){
				body += chunk;
			});
			res.on('end', function() {
				message = body;
				return interaction.reply(message);
			});
		});
	},
};
