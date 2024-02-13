const Discord = require("discord.js");
const {ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, EmbedBuilder, PermissionFlagsBits, TextInputBuilder, TextInputStyle, PermissionsBitField} = require("discord.js")
const font = "Manrope";
const fetch = ("node-fetch");
const fs = require("fs");
const ws = require("ws")
const axios = require("axios")
const cheerio = require("cheerio")
const {readdirSync} = require("fs")
const db = require("croxydb") 
const Util = require('util')
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const ms = require("ms")
const moment = require('moment')

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

module.exports = {
    name: "messageCreate",
    run: async(client, message) => {

  if(message.author.bot) return;

  if(message.mentions.users.has(client.user.id)) {

    const embed = new EmbedBuilder()
    .setDescription(`Hey hi ${message.author} 👋, since you tagged me I guess you wanted to see my invite links. 
You can go to my website, support server or top.gg vote from the links below.`)
    .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL({ extension: 'png' })})
    .setColor("Blurple")

    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Website")
          .setURL("https://www.kittybot.me"),
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Support Server")
          .setURL("https://discord.gg/TCWbk7zWY5"),
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Top.GG Vote")
          .setURL("https://top.gg/bot/1149967648248057897/vote")
    )

    message.reply({
      embeds: [embed], 
      components: [row]
    }).catch(e => {})

  } 

if (message.content.startsWith(";eval")) {
      var args = message.content.split(" ").slice(1)
  if (message.author.id !== "YOUR ID") return
  let arguman = args.join(" ");
  if (!arguman) return
  let executedIn = process.hrtime();
  function clean(msg) {
    if (typeof msg !== "string")
      msg = Util.inspect(msg, { depth: 0 });
    msg = msg
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    executedIn = process.hrtime(executedIn);
    executedIn = executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);
    return msg
  }
  try {
    const evaled = clean(await eval(arguman));
    const embddddd = new Discord.EmbedBuilder()
   .setTitle("🥳 Code executed successfully")
      .setDescription(`
> Kod parçacığı \`${executedIn.toFixed(3)} ms\` de **çalıştırıldı.**
      \`\`\`js\n${evaled}\`\`\`
      `)
     message.channel.send({embeds: [embddddd]});
  } catch(err) {
    console.log(err)
    message.channel.send({embeds: [
      new Discord.EmbedBuilder()
      .setTitle("🤯 An error was encountered")
      .setDescription(`
      \`\`\`js\n${err}\`\`\`
      `)
      .setTimestamp()
                         ]});
  }
    }

    }
}
