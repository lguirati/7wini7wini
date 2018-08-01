const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
     client.user.setActivity("🙃تواضعة وحسو براسهم-->عندهم نقص",{type: 'PLAYING'});

})







client.login(process.env.BOT6_TOKEN);
