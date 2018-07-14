 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '×'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`×help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

                      
        
client.on('message', function (message) {
    var messageParts = message.content.split(' ');

    var command = messageParts[0].toLowerCase();
    var parameters = messageParts.splice(1, messageParts.length);


    switch (command) {
        case "×join":
        if(message.guild.voiceConnection){
            message.reply('I\'m Already In A Voice Connection!');
        }else if(!message.member.voiceChannel){
            message.reply('You\'re Not In A Voice Channel!');
        }else{
    let channel = message.member.voiceChannel;
    channel.join();
        }
            break;
case "×play":
        if(!message.guild.voiceConnection){
            message.reply('I\'m Not In A Voice Channel!');
        }else{
//كود بدء الموسيقى مالك
        }
            var voiceConnection = client.voiceConnections.first();

            break;
}
});
 












client.login(process.env.BOT3_TOKEN);
