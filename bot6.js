const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
     client.user.setActivity("Sad & Alone i wanna Sleep😪<3;(",{type: 'PLAYING'});

})





let timer;
console.log("MAMAK");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`  come play       
تعال نلعب 
https://discord.gg/bSqzNCx `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})


client.login(process.env.BOT6_TOKEN);
