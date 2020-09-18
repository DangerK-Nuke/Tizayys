const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor !**`}})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   Şuanda Çalan Bir Şarkı Yok !` }})
const sarki = await client.player.pause(message.guild.id);
message.channel.send({embed: {color: FynxDogru, description: `<a:ykleniyor:754608079940878406>   |   \`${sarki.name}\` Adlı Şarkı Duraklatıldı.` }})
};

module.exports.config = {
  name: "duraklat",
  aliases: []
}