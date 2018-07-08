const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
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
    if (message.content.startsWith("+avatar")) {
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



client.on('message', message => {
if (message.content === "+id") {
var year = message.createdAt.getFullYear()
var month = message.createdAt.getMonth()
var day = message.createdAt.getDate()
     let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
    .addField("**اسمك:**",  '**[ ' + `${message.author.username}` + ' ]**')
      .setThumbnail(message.author.avatarURL)
               .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
  .addField('الكود الخاص بك:', message.author.discriminator)
  .addField("**عدد الايام منذ افتتاح حسابك:**", message.author.createdAt.getDate())
    .addField("** تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
        .addField("** عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())

  message.channel.send({embed});
    }
})

cli             .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
  .addField('الكود الخاص بك:', message.author.discriminator)
  .addField("**عدد الايام منذ افتتاح حسابك:**", message.author.createdAt.getDate())
    .addField("** تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
        .addField("** عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())

  message.channel.send({embed});
    }
})

client.on('message', message => {
if(message.content.startsWith(prefix + "invite")) { 
message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
}
});



client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'ms7')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("اعلى حد للمسح هو 100").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("ااختر كمية المسح من 1-100").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` تم المسح`).then(messages => messages.delete(5000));
  }
  });








client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc1') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

















client.login(process.env.BOT_TOKEN);
