const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'S'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 7000 ;
    var setGame = [`Spomi Army`,`Just Smile ☺`,`Shelp`];
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
    }, ms);7000

});






const config = require('./configs.json');


const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {        
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
        .catch(console.error);
        
    
    
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}



client.on('ready', () => {
  console.log('Bot Is Online')
  if(config.speed <10000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});



client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
('+avatar ' , 'صورة حسابك / Your image account  ') 
('+linke ' , 'Bot send you Link server for join ') 
('+id ' , 'لعرض معلوماتك / information for your account ') 
('رابط السيرفر في الخاص  ' ,'  رابط  ')

   message.author.sendEmbed(embed)
   
   }
   }); 
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done Chek private " , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});






client.login(process.env.BOT3_TOKEN);
