const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
     client.user.setActivity("S A D , L i F E 😥",{type: 'PLAYING'});

});







client.login(process.env.BOT6_TOKEN);
