const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '0'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});









client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 5000 ;
    var setGame = [`i AM Ugly as Fuck`,`Life is Hell `,`S A D L i F E 😥`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);1000

});

client.on('message' , mohamed => {
if(mohamed.content.startsWith('@[PG] Spomi_YT 🌹') {
mohamed.reply('إدا لم أرد عليك الان يمكنك ترك رسالة في الخاص ربتما أعود');
}
});

                          




client.login(process.env.BOT5_TOKEN);
