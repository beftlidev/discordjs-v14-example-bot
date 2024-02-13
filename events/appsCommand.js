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
    name: "interactionCreate",
    run: async(client, interaction) => {

    if(!interaction.isContextMenuCommand()) return;
  
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) return

    if(interaction.guild == null) {
      return interaction.reply({ 
        embeds: [new Discord.EmbedBuilder().setDescription(`Hey ${interaction.user}, you can't use my commands over DM.`).setColor("Red").setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ extension: 'png' })}).setTimestamp()],
        ephemeral: true
    })
    }

    var cmd;

    if(command.commandAuthType == "User") {

      if(client.channels.cache.get(interaction.channel.id).guild.members.me.permissionsIn(interaction.channel.id).has([PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles])) {

        await client.botDB.add("bot.use", 1)
        command.run(client, interaction)

    } else {

      interaction.reply({ 
        embeds: [new Discord.EmbedBuilder().setDescription(`Hey ${interaction.user}, one or both of \`SendMessages, AttachFiles\` authorisations are not available in this channel. Therefore, commands are restricted on this channel. Please contact an authorised person.`).setColor("Red").setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ extension: 'png' })}).setTimestamp()],
        ephemeral: true
    })

    }

    } else if(command.commandAuthType == "Admin") {

    if(interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) {

        await client.botDB.add("bot.use", 1)
        command.run(client, interaction)

    } else {

        const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setEmoji(emojidb_id.public)
          .setURL("ENTER HERE THE URL OF YOUR BOT WITH 8 PERMS")
        )

        interaction.reply({ 
          embeds: [new Discord.EmbedBuilder().setDescription(`Hey ${interaction.user}, I don't have \`Administrator\` privileges on the server. This is why Admin commands are restricted on this server. Let's fix this!

**Solution 1**: In the roles section of the server settings, check if the \`YOUT BOT NAME\` role or the custom role you gave me has \`Administrator\` privileges. 

**Solution 2**: Remove me from the server and add me back by pressing the button below.`).setColor("Red").setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ extension: 'png' })}).setTimestamp()],
          components: [row],
          ephemeral: true
      })

    }
  }

    }
}