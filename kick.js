const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = "";
const col = "";

let nonperms = new Discord.MessageEmbed()
.setDescription("Vous n\'avez pas la permission d\'utiliser cette commande.")
.setColor(col)
let nonping = new Discord.MessageEmbed()
.setDescription("Veuillez mentionner le membre à expulser.")
.setColor(col)
let nonkick = new Discord.MessageEmbed()
.setDescription("Le bot ne peut pas expulser ce membre.")
.setColor(col)
let nonreason = new Discord.MessageEmbed()
.setDescription("Veuillez précisez une raison !")
.setColor(col)

module.exports.run = async (Client, message, args) => {
    if(!message.content.startsWith(prefix + "kick")) return
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(nonperms)
    const member = message.mentions.members.first()
    if (!member) return message.channel.send(nonping)
    if (!member.kickable) return message.channel.send(nonkick)
    const reason = args.slice(2).join(' ')
    if(!reason) return message.channel.send(nonreason)
    await member.kick({reason})
    let embedkick = new Discord.MessageEmbed() 
    .setDescription(`${member} a été expulser pour la raison : **${reason}** !`)
    .setColor(col)
    message.channel.send(embedkick)
}

module.exports.help = {
    name : "kick"
}