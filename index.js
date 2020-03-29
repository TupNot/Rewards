const Discord = require('discord.js')
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js')
var prefix = "r-";

const fs = require('fs')
bot.commands = new Discord.Collection();


bot.login("NjkzMTYzMTkxMzAzMjc0NTI2.XoDaLw._m4bIPDO5OFm0DB5R_TbvlFb7J8")

bot.on("ready", () => {
    console.log("⟨∑⟩ RewardsBot Ces Connecté Avec Succès !")
    bot.user.setActivity('Hello World', {type: "STREAMING", url:"https://www.twitch.tv/garryschool" }).catch(console.error)
});

bot.on('message', message => {

});

//list
bot.on('message', message => {
if(message.content.startsWith(prefix + "list")){
    var embed = new Discord.MessageEmbed()
        .setTitle("***Liste de rewards !***")
        .setDescription("*Bot de ?M™#7580 & Chris Mike#7436*")
        .setAuthor(bot.user.username)
        .addField("> **Spotify**",":green_circle:")
        .addField("> **NordVpn**",":blue_circle:")
        .addField("> **Netflix**",":red_circle:")
        .addField("> **Crunchyroll**",":orange_circle:")
        .addField("> **Prefix : r-**",":fleur_de_lis:")
        .addField("> **Minecraft**",":brown_circle:")
        .addField("> ")
        .addField("> ")
        .addField("NOM", message.author.username, true)
        .addField("ID", message.author.id, true)
        .setColor("D365BA")
        .setFooter(bot.user.username + " ")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.channel.send({embed}) 
  }
})


//spotify
bot.on('message', message => {
    if(message.content.startsWith(prefix + "spotify")){
        var embed = new Discord.MessageEmbed()
        .setTitle("Spotify")
        .setDescription("2 Invites = 1 Compte")
        .addField("4 Invites = 2 Comptes","---------------------")
        .addField("8 Invites = 5 Comptes","---------------------")
        .addField("10 Invites = 8 Comptes","---------------------")
        .setImage("https://i.imgur.com/eXRmyN5.gif")
        .setColor("#21F200")
        .setFooter(bot.user.username + "")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.channel.send({embed}) 
    }
})

//nordvpn
bot.on('message', message => {
    if(message.content.startsWith(prefix + "nordvpn")){
        var embed = new Discord.MessageEmbed()
        .setTitle("Nordvpn")
        .setDescription("2 Invites = 1 Compte")
        .addField("4 Invites = 2 Comptes","---------------------")
        .addField("8 Invites = 5 Comptes","---------------------")
        .addField("10 Invites = 8 Comptes","---------------------")
        .setImage("https://i.imgur.com/Zn8UTcT.png")
        .setColor("#0074FF")
        .setFooter(bot.user.username + "")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.channel.send({embed}) 
    }
})

//crunchyroll
bot.on('message', message => {
    if(message.content.startsWith(prefix + "crunchyroll")){
        var embed = new Discord.MessageEmbed()
        .setTitle("Crunchyroll")
        .setDescription("2 Invites = 1 Compte")
        .addField("4 Invites = 2 Comptes","---------------------")
        .addField("8 Invites = 5 Comptes","---------------------")
        .addField("10 Invites = 8 Comptes","---------------------")
        .setImage("https://i.imgur.com/hqmHYCN.gif")
        .setColor("#FB9800")
        .setFooter(bot.user.username + "")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.channel.send({embed}) 
    }
})

//minecraft
bot.on('message', message => {
    if(message.content.startsWith(prefix + "minecraft")){
        var embed = new Discord.MessageEmbed()
        .setTitle("Minecraft")
        .setDescription("2 Invites = 1 Compte")
        .addField("4 Invites = 2 Comptes","( No Check )")
        .addField("8 Invites = 5 Comptes","( No Check )")
        .addField("10 Invites = 8 Comptes","( No Check )")
        .setImage("https://i.imgur.com/HuRvbh2.png")
        .setColor("#473B2F")
        .setFooter(bot.user.username + "")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.channel.send({embed}) 
    }
})

//netflix
bot.on('message', message => {
    if(message.content.startsWith(prefix + "netflix")){
        var embed = new Discord.MessageEmbed()
        .setTitle("Netflix")
        .setDescription("2 Invites = 1 Compte")
        .addField("4 Invites = 2 Comptes","( No Check )")
        .addField("8 Invites = 5 Comptes","( No Check )")
        .addField("10 Invites = 8 Comptes","( No Check )")
        .setImage("https://i.imgur.com/ciRZ3L8.gif")
        .setColor("#EE0C0C")
        .setFooter(bot.user.username + "")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.channel.send({embed}) 
    }
})

//nitro
bot.on('message', message => {
    if(message.content.startsWith(prefix + "nitro")){
        var embed = new Discord.MessageEmbed()
        .setTitle("Nitro")
        .setDescription("2 Invites = 1 Compte")
        .addField("4 Invites = 2 Comptes","( No Check )")
        .addField("8 Invites = 5 Comptes","( No Check )")
        .addField("10 Invites = 8 Comptes","( No Check )")
        .setImage("https://i.imgur.com/s7Dim22.gif")
        .setColor("#86B1E5")
        .setFooter(bot.user.username + "")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.channel.send({embed}) 
    }
})