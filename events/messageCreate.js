const { Events } = require('discord.js');
const { createDisboardEmbed } = require('../embeds/disboardEmbed');
const dotenv = require('dotenv');
dotenv.config();

const clientId = process.env.CLIENT_ID;

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;

        if (message.content.includes(`${clientId}`)) {
            message.reply(`Shiido est le goat\``);
        }

        if (message.content.includes("This server is currently under review")) {
            const embed = createDisboardEmbed();
            message.reply({ embeds: [embed] });
        }
    },
};