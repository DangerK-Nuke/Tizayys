const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
const calan = await client.player.nowPlaying(message.guild.id); 
const calanembed = new Discord.MessageEmbed()
.setImage(`https://i.ytimg.com/vi/${calan.id}/default.jpg?width=1920&height=1080`)
.setColor("#22BF41")
.setDescription(`<a:mzikalyor:754671158493839470>   |   Şu Anda Çalınan Şarkı :\n\`${calan.name}\``)
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor !**` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   Şuanda Çalan Bir Şarkı Yok !` }})
message.channel.send(calanembed)
};

module.exports.config = {
    name: "çalan",
    aliases: ["ringing"]
};
