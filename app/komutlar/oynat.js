const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message, args) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor !**` }})
if (!args[0]) return message.channel.send({embed: {color: FynxHata, description: `<a:yanltik:754607685713788928>   |   Şarkı Oynatabilmek İçin Bir Şarkı Adı Girin !` }})  
const SuAndaSarkiOynatilmaktadir = client.player.isPlaying(message.guild.id);
if(SuAndaSarkiOynatilmaktadir){
const sarki = await client.player.addToQueue(message.guild.id, args.join(" "));
message.channel.send({embed: {color: FynxDogru, description: `<a:mzikalyor:754671158493839470>   |   \`${sarki.name}\` Adlı Şarkı **HezoyyMusıc** Listesine Eklendi !` }})
    } else {
const sarki = await client.player.play(message.member.voice.channel, args.join(" "));
 message.channel.send({embed: {color: FynxDogru, description: `<a:mzikalyor:754671158493839470>   |   Şu Anda Çalınan Şarkı :\n\`${sarki.name}\`` }})
sarki.queue.on('end', () => {
message.channel.send({embed: {color: FynxHata, description: `<a:mzikalyor:754671158493839470>   |   Kuyruktaki Tüm Şarkılar Oynatıldı, HezoyyMusıc Ses Kanalından Ayrılıyor.` }})
    })
    }    
};

module.exports.config = {
    name: "oynat",
    aliases: ["çal","play"]
};