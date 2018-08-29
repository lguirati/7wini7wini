const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();

/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
npm i ffmpeg-binaries
*/

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[.] ${client.users.size}`)
    client.user.setStatus("dnd")
});
//by ! - .'

client.on('ready', function(){
    var ms = 5000 ;
    var setGame = [`${prefix}help Servers ${client.guilds.size} `,`${prefix}invite Users ${client.users.size}`];
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
        client.user.setGame(setGame[i],`http://www.twitch.tv/osama_gmt`);
    }, ms);5000

});


const prefix = "#"
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ! - .'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ! - .'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ! - .'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ! - .'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ! - .'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ! - .'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ! - .'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ! - .'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ! - .'
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {//by ! - .'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ! - .'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ! - .'
					.setFooter("Threaper")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ! - .'
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}//by ! - .'

			return handleVideo(video, msg, voiceChannel);
		}//by ! - .'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {//by ! - .'
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ! - .'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ! - .'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ! - .'
		const embedqu = new Discord.RichEmbed()
//by ! - .'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ! - .'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ! - .'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ! - .'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ! - .'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ! - .'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ! - .'
		queue.set(msg.guild.id, queueConstruct);
//by ! - .'
		queueConstruct.songs.push(song);
//by ! - .'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ! - .'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ! - .'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ! - .'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ! - .'
	}//by ! - .'
	console.log(serverQueue.songs);
//by ! - .'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ! - .'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ! - .'
			play(guild, serverQueue.songs[0]);
		})//by ! - .'
		.on('error', error => console.error(error));//by ! - .'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ! - .'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ! - .'



var prefix = '#';

client.on('message', msg => {
	if (msg.content.startsWith(prefix + 'help')) {
msg.author.send("Commands الطلب " + `  **
   "  : الاوامر "
For add Bot | لدعوت البوت 
https://discordapp.com/oauth2/authorize?client_id=468601539968237598&permissions=8&scope=bot
:headphones:  ${prefix}play |اسم لاغنيه / رابط الاغنية
:headphones:  ${prefix}skipللإنتقاال الى الاغنيه التاليه (\اذا كان هناك بقائمة الانتظار\
:headphones:  ${prefix}stop|لأيقاف الموسيقى
:headphones:  ${prefix}volume |لتغير حجم الصوت
:headphones:  ${prefix}np | لإقاف الموسيقى مؤقتا
:headphones:  ${prefix}resume |لاعادت تشغيل الاغنية الموجودة
**`);
 }
});






                          


client.on('message', message => {
       if (message.content.startsWith(prefix + 'botinfo')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});





client.on('message', message => {
if(message.content.startsWith(prefix + "invite")) { 
message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
}
});






client.login(process.env.BOT8_TOKEN);
