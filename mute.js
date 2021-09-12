const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = "";
const col = "";



module.exports.run = async (Client, message, args) => {
    if(message.content.startsWith(prefix + "mute")){
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à rendre muet.')
        let args = message.content.substring(prefix.length).split(" ")
        const reason = args.slice(2).join(' ')
        if(!reason) return message.channel.send("Veuillez précisez une raison !")
        let mute = new Discord.MessageEmbed()
        .setDescription(`${member} a été rendu muet pendant une durée indéterminée pour la raison : **${reason}**`)
        .setColor(col)
        member.roles.add("")
        message.channel.send(mute)

    }

}

module.exports.help = {
    name : "mute"
}