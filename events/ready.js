const Discord = require("discord.js");
const {ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, EmbedBuilder, PermissionFlagsBits, ActivityType, TextInputBuilder, TextInputStyle, PermissionsBitField, WebhookClient} = require("discord.js")
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
    name: "ready",
    run: async(client) => {

        setInterval(async() => { 

        const guildd = client.guilds.cache.size;
        const userss = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()

        const messages = [
          '🐈 meow meow meow',
          '😡 HEY, that\'s my furball!',
          `😺 I'm purring on ${guildd} servers.`,
          '🐈 meow meow meow',
          `😻 Playing in my cat litter with ${userss}.`,
          `🍽️ ${userss} people and I eat formula.`,
          '🐈 meow meow meow',
          `😼 I'm chasing my tail on ${guildd} servers.`,
          '😿 You still haven\'t added me to your server?',
          '😾 HEY, don\'t you ever step on my tail again!',
          '🐈 meow meow meow',
        ];

        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];

        client.user.setPresence({ activities: [{ name: `${randomMessage}`, type: ActivityType.Custom }], status: "idle" });

    }, 60000) 
    
    console.log("[BOT] The status was set successfully.") 
    
          const globalCommands = Array.from(
              client.commands.filter((cmd) => cmd.global === true).values()
            ).map((m) => m.data);
        
            const rest = new REST({ version: "10" }).setToken(client.token);
        
            await rest
              .put(Routes.applicationCommands(client.user.id), { body: globalCommands })
              .catch(console.error);
      
    
    console.log("[BOT] Slash command loaded for " + client.guilds.cache.size + ".")
        
    console.log(`[BOT] ${client.user.tag} is online.`);

    }
}