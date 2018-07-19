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

                      
        
 
client.on('message', message => {
    if (message.content.startsWith("×avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

  




client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '469471231427477505').setName("W");
client.channels.find('id', '469471231427477505').setName("We");
client.channels.find('id', '469471231427477505').setName("Wel");
client.channels.find('id', '469471231427477505').setName("Welc");
client.channels.find('id', '469471231427477505').setName("Welco");
client.channels.find('id', '469471231427477505').setName("Welcom");
client.channels.find('id', '469471231427477505').setName("Welcome");
client.channels.find('id', '469471231427477505').setName("Welcome T");
client.channels.find('id', '469471231427477505').setName("Welcome To");
client.channels.find('id', '469471231427477505').setName("Welcome To ");
client.channels.find('id', '469471231427477505').setName("Welcome To S");
client.channels.find('id', '469336127254298625').setName("Welcome To SE");
client.channels.find('id', '469471231427477505').setName("Welcome To SER");
client.channels.find('id', '469471231427477505').setName("Welcome To SERV");
client.channels.find('id', '469471231427477505').setName("Welcome To SERVE");
client.channels.find('id', '469471231427477505').setName("Welcome To SERVER");
}, 3000);
 
});






client.login(process.env.BOT3_TOKEN);
