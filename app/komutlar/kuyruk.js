const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor !**` }})
const kuyruk = client.player.getQueue(message.guild.id);
if(!kuyruk) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   Şuanda Çalan Bir Şarkı Yok !` }})
let q = kuyruk.songs.map((song, i) => {
return `${i === 0 ? '<a:mzikalyor:754671158493839470>   |   Şu Anda Çalınan Şarkı' : `\nKuyruk No: ${i}`} \n**Şarkı:** \`${song.name}\` \n**Kanal:** \`${song.author}\``
    }).join('\n');  
message.channel.send({embed: {color: FynxDogru, title: `HezoyyMusıc Müzik Kuyruğu`, description: `${q}`}})
}
  
module.exports.config = {
    name: "kuyruk",
    aliases: ["queue"]
};
