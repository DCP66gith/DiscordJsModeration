const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = "";
const col = "";
const ms = require("ms")

let erreur = new Discord.MessageEmbed()
.setDescription("Vous devez utilisez d (jours), h (heures), m (minutes) ou s (secondes)")
.setColor(col)

module.exports.run = async (Client, message, args) => {
    if(message.content.startsWith(prefix + "tempmute")){
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à rendre muet.')
        let args = message.content.substring(prefix.length).split(" ")
        const reason = args.slice(3).join(' ')
        if(!reason) return message.channel.send("Veuillez précisez une raison !")
        if (
            !args[2].endsWith("d") &&
            !args[2].endsWith("h") &&
            !args[2].endsWith("m") &&
            !args[2].endsWith("s") 
        )
            return message.channel.send(erreur)
        let mute = new Discord.MessageEmbed()
        .setDescription(`${member} a été rendu muet pendant **${args[2]}** pour la raison : **${reason}**`)
        .setColor(col)
        message.channel.send(mute)
        member.roles.add("")
        setTimeout(() => {
            member.roles.remove("")
        }, ms(args[2]));
    }
}

module.exports.help = {
    name : "tempmute"
}