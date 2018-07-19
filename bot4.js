const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Spomi`,"http://twitch.tv/S-F")
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


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '469336127254298625').setName("W");
client.channels.find('id', '469336127254298625').setName("We");
client.channels.find('id', '469336127254298625').setName("Wel");
client.channels.find('id', '469336127254298625').setName("Welc");
client.channels.find('id', '469336127254298625').setName("Welco");
client.channels.find('id', '469336127254298625').setName("Welcom");
client.channels.find('id', '469336127254298625').setName("Welcome");
client.channels.find('id', '469336127254298625').setName("Welcome T");
client.channels.find('id', '469336127254298625').setName("Welcome To");
client.channels.find('id', '469336127254298625').setName("Welcome To ");
client.channels.find('id', '469336127254298625').setName("Welcome To S");
client.channels.find('id', '469336127254298625').setName("Welcome To SE");
client.channels.find('id', '469336127254298625').setName("Welcome To SER");
client.channels.find('id', '469336127254298625').setName("Welcome To SERV");
client.channels.find('id', '469336127254298625').setName("Welcome To SERVE");
client.channels.find('id', '469336127254298625').setName("Welcome To SERVER");
}, 7000);
 
});


client.login(process.env.BOT4_TOKEN);
