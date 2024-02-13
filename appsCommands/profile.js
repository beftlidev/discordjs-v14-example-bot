const Discord = require('discord.js');
const {ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, EmbedBuilder, PermissionFlagsBits, TextInputBuilder, TextInputStyle, ApplicationCommandType, StringSelectMenuBuilder, StringSelectMenuOptionBuilder} = require("discord.js")
const addModal = require("../helpers/addModal.js")
const db = require('croxydb') 

const { ContextMenuCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName("Profile")
    .setType(ApplicationCommandType.User),
    global: true,
    commandAuthType: "User",
    run: async (client, interaction) => {

        await interaction.deferReply({ephemeral: true})

        const user = client.users.cache.get(interaction.targetId)

        const dcdate = interaction.guild.members.cache.get(user.id).user.createdAt.getTime()
        const serverdate = interaction.guild.members.cache.get(user.id).joinedAt.getTime()
        
        const embed = new Discord.EmbedBuilder()
        .setThumbnail(user.displayAvatarURL({ extension: 'png' }))
        .setColor("Blurple")
        .setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ extension: 'png' })})
        .setTimestamp()

            embed.setAuthor({name: `${user.username}'s profile`})

        const banner = await user.fetch({force: true}).then(async(uss) => { return uss.banner })

        if(banner) {
            const extension = banner.startsWith("a_") ? ".gif" : ".png";
            embed.setImage(`https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`)
        }

        embed.addFields([
            {name: "Date of Discord account opening", value: `<t:${(dcdate-(dcdate%1000)) / 1000}:R>`},
            {name: "Date of joining the server", value: `<t:${(serverdate-(serverdate%1000)) / 1000}:R>`},
        ])

        interaction.editReply({ 
            embeds: [embed]
        })

} 
}