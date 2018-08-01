const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready' , () => {
client.user.setGame('S A D L i F e 😥 i NEED 💞');
});







client.login('BOT6_TOKEN');
