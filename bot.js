const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

   
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});








client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 5000 ;
    var setGame = [`$help <-- For info`,`MAROC ▄︻̷̿┻̿═━ GAMER`];
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
    }, ms);4000

});




client.on('message', message => {
var prefix = "$";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**0bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
 


client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
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
  



client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "rolemsg")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
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


client.on('message', message => { if (message.author.bot) return; if (message.content === prefix + "help") { 		 message.channel.send('**The Message Was Sent On Private**'); 	 		 message.author.sendMessage(` ** __~~The ARAB GAMER ~~__ By: Spomi : 9954 

╔[❖════════════❖]╗ Prefix =  $
   
╔[❖════════════❖]╗بعض أوامر
$say : يكرر كلامك
$bc : إرسال رسالة في الخاص للجميع
$rolemsg <@role> يرسل رسالة في الخاص للرول الدي قمت بمنشنته
متال: 
$rolemsg @Vip كيف حالكم 
$ms7 : مسح الشاة بالعدد
$clear : مسح الشات كليا
$invite : يرسل لك في الخاص رابط دعوته
$id :  معلومات عن حسابك 
$avatar : يعرض صورة حسابك 
________________
 MAROC ▄︻̷̿┻̿═━ GAMER البوت خاص لسيرفر 
جاري التعديل على البوت

================================================================== `); } });



client.on('message', message => {
       if (message.content.startsWith(prefix + 'botinfouser')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});



client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});
 

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Do not have permission** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
 

client.on('message', message => {
    if (message.content === "$createrooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice') 
     message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
     message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')
}
});
 


client.on('message', message => {
    var prefix = "$";

      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 281762317522305024) return;


    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '281762317522305024') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else


    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '281762317522305024') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/HP");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else

    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '281762317522305024') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else

    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '281762317522305024') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    }



     });
        
        client.on('message', message => {
	const prefix = '$'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
        
        
        client.on('message', message => { 
    if (message.content === "$seroles") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "♛",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "「 O W N E R 」",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「ADMINSTRATOR」",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「 C O - L E A D E R 」",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "♛ L E A D E R࿐",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "𖣘 C O-L E A D E R ༒",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "༺ A D M I N ༻",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "「Lieutenant」",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「Favourites」",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "⇝B O T⇜",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "⇝M U S I C⇜",
       permissions :   [1],
       color : " #000000"
   }) 
})
}
 
});
       
        
        
        
        client.on('message' , message => {
if(message.content === 'voice') {
    message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
}
});
        
        
        
client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '$seruser') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })



 

          

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('.bcall')){
 if(!message.author.id === '281762317522305024') return;
message.channel.sendMessage(' جار ارسال الرسالة | ✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



client.on('guildCreate', guild => {
  client.channels.get("471896639766921217").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("471896639766921217").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "n9ihna") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});



client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });



client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})



	const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
 
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'welcome');
const w = ['./w1.png'];
 
         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
         
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to The Server`, 300, 130);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                         
               
                             
welcomer.sendFile(canvas.toBuffer())
 
 
 
     
     
                    }  )  
     
                   
 
})
      });                    
});

		


client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('531620768589807616');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: ${currentSize}`);
  if (currentSize !== size) channel.setName(`Voice Online: ${currentSize}`);
});


client.on('message', message => {
var prefix = "$";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
 
 









client.login(process.env.BOT_TOKEN);
