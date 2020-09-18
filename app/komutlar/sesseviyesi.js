const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message, args) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |  **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor !**` }})  
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   Şuanda Çalan Bir Şarkı Yok !` }})
let sesseviyesi = parseInt(args.join(" "));
if (!sesseviyesi) return message.channel.send({embed: {color: FynxHata, description: `<a:sesplaka:754679418395295786> | Ses Seviyesini Ayarlayabilmek İçin Bir Rakam Girin !` }})
if (args > 300) return message.channel.send({embed: {color: FynxHata, description: `Ses Seviyesini Sadece \`0\` ile \`300\` Arasında Ayarlayabilirsiniz. `}})
if (args < 0) return message.channel.send({embed: {color: FynxHata, description: `Ses Seviyesini Sadece \`0\` ile \`300\` Arasında Ayarlayabilirsiniz. ` }})
client.player.setVolume(message.guild.id, sesseviyesi * 70);
message.channel.send({embed: {color: FynxDogru, description: `<a:sesplaka:754679418395295786>  |  Ses Seviyesi : \`${args.join(" ")}\`` }})
}

module.exports.config = {
  name: "ses",
  aliases: ["ses-seviyesi","sound","sound-level"]
};
