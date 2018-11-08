const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


client.on('ready', async() => {
var server = "510045258139303946";
var channel = "510045318860242944";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Spam ,  Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , ')
    },305);
})


client.login(process.env.BOT_TOKEN)
