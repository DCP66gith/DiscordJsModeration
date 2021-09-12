const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = "";
const col = "";

let pasperms = new Discord.MessageEmbed()
.setDescription("Vous n\'avez pas la permission d\'utiliser cette commande.")
.setColor(col)
let pasping = new Discord.MessageEmbed()
.setDescription("Veuillez mentionner le membre à rendre unmute.")
.setColor(col)

module.exports.run = async (Client, message, args) => {
    if(message.content.startsWith(prefix + "unmute")){
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(pasperms)
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(pasping)
        let unmute = new Discord.MessageEmbed()
        .setDescription(`${member} n'est plus muet.`)
        .setColor(col)
        member.roles.remove("")
        message.channel.send(unmute)
    }
}



module.exports.help = {
    name : "unmute"
}