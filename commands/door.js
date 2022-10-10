const { SlashCommandBuilder } = require('discord.js');
http = require('node:http');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('door')
		.setDescription('Roomba opens the main door'),
	async execute(interaction) {
		var message = '';
		await http.get({
			hostname: '129.21.121.208',
			port: 8080,
			path: '/door',
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
		//return interaction.reply(message);
	},
};
