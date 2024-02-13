const Discord = require('discord.js');
const {ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, EmbedBuilder, PermissionFlagsBits, TextInputBuilder, TextInputStyle} = require("discord.js")
const addModal = require("../helpers/addModal.js")
const moment = require("moment")
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("Information about me."),
    global: true,
    commandAuthType: "User",
    run: async (client, interaction) => {

        await interaction.deferReply()

        var uptime = Date.now() - (Math.round(process.uptime()) * 1000);
        var botuptime = `<t:${(uptime-(uptime%1000)) / 1000}:R>`;

        const embed = new Discord.EmbedBuilder()
        .setAuthor({name: "Abuot Me", iconURL: client.user.displayAvatarURL({ extension: 'png' })})
        .setDescription("Hello, I'm Kitty. I'm a bot that will make your server better. My owner <@389071682649849868> (`beftli`), you can reach him if you have any suggestions, requests or if there is an error in the bot.")
        .addFields([
            {name: `• General`, value: `Total Servers ( **${client.guilds.cache.size}** ) \nTotal Users ( **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** ) \n`},
            {name: `• Bot`, value: `Ping ( **${client.ws.ping}** ) \nUptime ( **${botuptime}** ) \nMemory Usage ( **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / 4 GB** )`},
            {name: `• Command`, value: `Total Command Size ( **${client.commands.size}** ) \nTotal Command Use ( **${await client.botDB.fetch("bot.use")}** )`}
        ])
        .setColor("Blurple")
        .setImage("https://top.gg/api/widget/upvotes/1149967648248057897.png")
        .setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ extension: 'png' })})

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

        interaction.editReply({ embeds: [embed], components: [row] })
} 
}
