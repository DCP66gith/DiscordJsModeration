const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = "";
const col = "";

let nonperms = new Discord.MessageEmbed()
.setDescription("Vous n\'avez pas la permission d\'utiliser cette commande.")
.setColor(col)
let nonping = new Discord.MessageEmbed()
.setDescription("Veuillez mentionner le membre à bannir.")
.setColor(col)
let nonban = new Discord.MessageEmbed()
.setDescription("Le bot ne peut pas bannir ce membre.")
.setColor(col)
let nonreason = new Discord.MessageEmbed()
.setDescription("Veuillez précisez une raison !")
.setColor(col)
let pasban = new Discord.MessageEmbed()
.setDescription("Le bot ne peut pas ban un admin")
.setColor(col)

module.exports.run = async (Client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(nonperms)
    const member = message.mentions.members.first()
    if(member.hasPermission("ADMINISTRATOR")) return message.channel.send(pasban)
    if (!member) return message.channel.send(nonping)
    if (!member.bannable) return message.channel.send(nonban)
    const reason = args.slice(2).join(' ')
    if(!reason) return message.channel.send(nonreason)
    await member.ban({reason})
    let embedban = new Discord.MessageEmbed()
    .setDescription(`${member} a été banni pour la raison : **${reason}** !`)
    .setColor(col)
    message.channel.send(embedban)
}

module.exports.help = {
    name : "ban"
}