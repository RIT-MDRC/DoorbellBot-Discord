const { SlashCommandBuilder } = require('discord.js');

function httpGetAsync(theUrl, callback) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
      callback(xmlHttpReq.responseText);
  }
  xmlHttpReq.open("GET", theUrl, true); // true for asynchronous 
  xmlHttpReq.send(null);
}

module.exports = {
        data: new SlashCommandBuilder()
                .setName('door')
                .setDescription('Roomba opens the main door'),
        async execute(interaction) {
		httpGetAsync('https://jsonplaceholder.typicode.com/posts', function(result){
			console.log(result);
		});
                return interaction.reply('Roomba is on its way to the main door!');
        },
};

