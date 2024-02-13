const Discord = require("discord.js");
const { EmbedBuilder, GatewayIntentBits, ButtonStyle, PermissionsBitField, WebhookClient, Events, Partials} = require("discord.js");
const INTENTS = Object.entries(Discord.IntentsBitField.Flags).filter(([K]) => ![].includes(K)).reduce((t, [, V]) => t | V, 0)
const client = new Discord.Client({intents: INTENTS, partials: [Partials.Channel, Partials.Message, Partials.Reaction, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.ThreadMember, Partials.User]}) 
const Util = require('util') 
const {Collection} = require("discord.js"),
      {readdirSync} = require("fs")
const { ActionRowBuilder, ButtonBuilder, MessageAttachment } = require("discord.js");
const got = require("got");
const express = require('express')
const app = express()
const fetch = ("node-fetch");
const fs = require("fs");
const ws = require("ws")
const axios = require("axios")
const cheerio = require("cheerio")

    const {
        JsonDatabase,
        YamlDatabase
    } = require("wio.db");

    const botDB = new JsonDatabase({
        databasePath:"./databases/bot.json"
    });

    client.botDB = botDB

    client.commands = new Collection()

require("./utils/apps-loader.js")(client);
require("./utils/slash-loader.js")(client);
require("./utils/event-loader.js")(client);

client.token = "ENTER BOT TOKEN HERE"

client.login(client.token)

process.on("unhandledRejection", (reason, promise) => {

    return console.log(reason)

});