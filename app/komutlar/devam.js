const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor !**` }})
const sarki = await client.player.resume(message.guild.id);
if(!sarki) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   Şuanda Çalan Bir Şarkı Yok !` }})
message.channel.send({embed: {color: FynxDogru, description: `<a:mzikalyor:754671158493839470>   |   \`${sarki.name}\` Adlı Şarkı Devam Ettiriliyor.` }})
};

module.exports.config = {
    name: "devam",
    aliases: ["devamet", "devam-et","continuation"]
};