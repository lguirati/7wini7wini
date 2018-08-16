const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
     client.user.setActivity("Sad & Alone i wanna Sleep😪<3;(",{type: 'PLAYING'});

})





async def on_server_join(self, server):
        await self.wait_until_ready()
        embed = discord.Embed()
        embed.title = 'SERVER JOIN'
        embed.description = 'Shard ID: {0}'.format(self.shard_id)
        embed.set_author(name='{0} <{0.id}>'.format(server.owner), icon_url=server.owner.avatar_url)
        embed.add_field(name='Server', value='{0.name} <{0.id}>'.format(server))
        embed.add_field(name='Members', value='{0}/{1}'.format(sum(1 for x in server.members if x.status == discord.Status.online or x.status == discord.Status.idle), len(server.members)))
        embed.add_field(name='Default Channel', value=server.default_channel)
        embed.add_field(name='Channels', value='Text: {0}\nVoice: {1}\nTotal: {2}'.format(sum(1 for x in server.channels if x.type == discord.ChannelType.text), sum(1 for x in server.channels if x.type == discord.ChannelType.voice), len(server.channels)))
        embed.color = discord.Color.green()
        embed.timestamp = datetime.datetime.now()
        await self.queue_message('channel ID', embed)
 



client.login(process.env.BOT6_TOKEN);
