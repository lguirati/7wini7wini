const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
     client.user.setActivity("i am Sad & Alone But i am Fine<3",{type: 'PLAYING'});

})







client.login(process.env.BOT6_TOKEN);
