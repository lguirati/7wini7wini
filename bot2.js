const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.help`,"http://twitch.tv/S-F")
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


client.on('message', message => { if (message.author.bot) return; if (message.content === prefix + "help") { 		 message.channel.send('**The Message Was Sent On Private**'); 	 		 message.author.sendMessage(` ** __~~The ARAB GAMER ~~__ By: Spomi : 9954 
╔[❖════════════❖]╗ Prefix =  +
   
╔[❖════════════❖]╗بعض أوامر
+bc1 : إرسال رسالة في الخاص للجميع
+rolemsg <@role> يرسل رسالة في الخاص للرول الدي قمت بمنشنته
متال: 
+rolemsg @Vip كيف حالكم 
+ms7 : مسح الشاة بالعدد
+clear : مسح الشات كليا
+invite : يرسل لك في الخاص رابط دعوته
+avatar : يعرض صورة حسابك 
جاري التعديل على البوت 
لدعوة البوت من هنا 

https://discordapp.com/oauth2/authorize?client_id=466684487674363904&scope=bot&permissions=2080374975

================================================================== `); } });











client.login(process.env.BOT2_TOKEN);
