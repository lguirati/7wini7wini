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

  

client.on("message", async function(message)  {
let voiceMembers = message.guild.channels.get('468777690191888384');
if(message.content.startsWith(prefix + "voice")) {
    voiceMembers.sendMessage(`**الاعضاء المتواجدون حاليا : ${message.guild.members.filter(member => member.voiceChannel).size}**`);
    voiceMembers.sendMessage('```\n'+message.guild.members.filter(member => member.voiceChannel).map(m => m.user.tag).join('\n') + '```');
    
}
});





client.login(process.env.BOT3_TOKEN);
