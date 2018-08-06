const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
     client.user.setActivity("i am Sad & Alone i wanna Sleep😪<3",{type: 'PLAYING'});

})







client.login(process.env.BOT6_TOKEN);
