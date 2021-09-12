const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = "";
const col = "";

let paspermission = new Discord.MessageEmbed()
.setDescription("**Vous n'avez pas la permission d'utiliser cette commande !**")
.setColor(col)
let pasnombre = new Discord.MessageEmbed()
.setDescription("**Veuillez indiquez un nombre de message a supprimer.**")
.setColor(col)
let tropgrand = new Discord.MessageEmbed()
.setDescription("**Merci d'indiquez un nombre entre 1 et 99 !**")
.setColor(col);

module.exports.run = async (Client, message, args) => {
    if(!message.content.startsWith(prefix + "clear")) return;
    message.delete();
    if(message.author.bot)return;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(paspermission);
    let count = parseInt(args[1]);
    if(!count)return message.channel.send(pasnombre);
    if(isNaN(count))return message.channel.send("Non");
    if(count < 1 || count > 99)return message.channel.send(tropgrand);
    message.channel.bulkDelete(count + 1, true);
    let clear = new Discord.MessageEmbed()
    .setTitle("Clear")
    .setDescription("Vous avez supprimé " + count + " message(s)")
    .setColor(col)            
    message.channel.send(clear);
}



module.exports.help = {
    name : "clear"
}