const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
     client.user.setActivity("S A D_B O Y|~_~|--> i am fine<3",{type: 'PLAYING'});

})







client.login(process.env.BOT6_TOKEN);
