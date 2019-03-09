const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} Is online!`)
    bot.user.setActivity("#MakeBanjoGreatAgain Veed!")
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

 let prefix = botconfig.prefix;
 let messaggeArray = message.content.split(" ");
 let cmd = messaggeArray[0];
 let args = messaggeArray.slice(1);


 if(cmd === `${prefix}veed`){
     return message.channel.send("Stem op ons bij de veed awards  #letsmakebanjogreatagain");
 }
 if(cmd === `${prefix}bardo`){
    let cijfer = Math.floor(Math.random() * 4);
    let bardo = [
        "#letsmakebanjogreatagain!",
        "Stem op ons bij de veed!",
        "Gotverdomme Rick",
        "Yo waddup gasten",
      ];

     return message.channel.send(bardo[cijfer]);
 }
 if(cmd === `${prefix}bardolf`){
    message.channel.send("De grote leider hemzelf", {
        file: "https://pbs.twimg.com/profile_images/1511458328/image_400x400.jpg" // Or replace with FileOptions object
    });
 }
 if(cmd === `${prefix}help`){

    let sicon = bot.user.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Bot Commands")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Prefix", "!")
    .addField("!bardolf", "Laat een foto van de grote leider zien!")
    .addField("!Bardo", "Laat een typische bardo zin zien!")
    .addField("!veed", "Probeer het gewoon!!");
    .addField("Gemaakt door", "Joren Aka Jorny#5350");


    return message.channel.send(serverembed);
  }
});

bot.login(botconfig.token);
