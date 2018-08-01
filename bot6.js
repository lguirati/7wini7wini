const Discord = require('discord.js');
const client = new Discord.Client()
client.on('ready' , () => {
client.user.setGame('S A D L i F e 😥 i NEED 💞');
})
client.on('message' , mohamed => {
if(mohamed.content.startsWith('@[PG] Spomi_YT 🌹') {
mohamed.reply('إدا لم أرد عليك الان يمكنك ترك رسالة في الخاص ربتما أعود');
}
});



client.login('BOT6_TOKEN');
