const Discord = require('discord.js')
const moment = require('moment')
const {Collection, ActionRowBuilder, ButtonBuilder, ButtonStyle, ActivityType, EmbedBuilder} = require("discord.js")
const { PermissionsBitField } = require('discord.js');
const { readdirSync } = require("fs")
const fs = require("fs")

module.exports = async(client, interaction) => {

    let commandPath = "./appsCommands"
    let konsol = "";

    for (const file of fs.readdirSync(commandPath).filter((file) => file.endsWith(".js"))) {

      const command = require(`../appsCommands/${file}`);
      client.commands.set(command.data.name, command);
      konsol += konsol ? `, { ${file} }` : `{ ${file} }`;

    }

    console.log(`[APPS_COMMAND] ( ${konsol} ) loaded.`)
    console.log()

}
