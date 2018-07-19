const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`For add Talke #9954| =help`,"http://twitch.tv/S-F")
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

for add The Bot Talke White owner Bot #9954 

#لدعوت البوت المرج التكلم مع المالط 9954

Owner name : Spomi

================================================================== `); } });





client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '453449558761144330').setName("W");
client.channels.find('id', '453449558761144330').setName("We");
client.channels.find('id', '453449558761144330').setName("Wel");
client.channels.find('id', '453449558761144330').setName("Welc");
client.channels.find('id', '453449558761144330').setName("Welco");
client.channels.find('id', '453449558761144330').setName("Welcom");
client.channels.find('id', '453449558761144330').setName("Welcome");
client.channels.find('id', '453449558761144330').setName("Welcome T");
client.channels.find('id', '453449558761144330').setName("Welcome To");
client.channels.find('id', '453449558761144330').setName("Welcome To ");
client.channels.find('id', '453449558761144330').setName("Welcome To S");
client.channels.find('id', '453449558761144330').setName("Welcome To SE");
client.channels.find('id', '453449558761144330').setName("Welcome To SER");
client.channels.find('id', '453449558761144330').setName("Welcome To SERV");
client.channels.find('id', '453449558761144330').setName("Welcome To SERVE");
client.channels.find('id', '453449558761144330').setName("Welcome To SERVER");
}, 8000);
 
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '465574494476435461').setName("🔊");
client.channels.find('id', '465574494476435461').setName("🔊a");
client.channels.find('id', '465574494476435461').setName("🔊an");
client.channels.find('id', '465574494476435461').setName("🔊ann");
client.channels.find('id', '465574494476435461').setName("🔊anno");
client.channels.find('id', '465574494476435461').setName("🔊annou");
client.channels.find('id', '465574494476435461').setName("🔊announ");
client.channels.find('id', '465574494476435461').setName("🔊announc");
client.channels.find('id', '465574494476435461').setName("🔊announce");
client.channels.find('id', '465574494476435461').setName("🔊announcem");
client.channels.find('id', '465574494476435461').setName("🔊announceme");
client.channels.find('id', '465574494476435461').setName("🔊announcemen");
client.channels.find('id', '465574494476435461').setName("🔊announcement");
client.channels.find('id', '465574494476435461').setName("🔊announcement🕪");
}, 8000);
 
});



client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '444855713726988288').setName("🔴");
client.channels.find('id', '444855713726988288').setName("🔴l");
client.channels.find('id', '444855713726988288').setName("🔴li");
client.channels.find('id', '444855713726988288').setName("🔴liv");
client.channels.find('id', '444855713726988288').setName("🔴live");
client.channels.find('id', '444855713726988288').setName("🔴live-");
client.channels.find('id', '444855713726988288').setName("🔴live-t");
client.channels.find('id', '444855713726988288').setName("🔴live-tw");
client.channels.find('id', '444855713726988288').setName("🔴live-twi");
client.channels.find('id', '444855713726988288').setName("🔴live-twit");
client.channels.find('id', '444855713726988288').setName("🔴live-twitc");
client.channels.find('id', '444855713726988288').setName("🔴live-twitch");
client.channels.find('id', '444855713726988288').setName("🔴live-twitch🔴");
}, 8000);
 
});







client.login(process.env.BOT4_TOKEN);
