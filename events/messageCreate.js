const { Events } = require('discord.js');
const { createDisboardEmbed } = require('../embeds/disboardEmbed');
const dotenv = require('dotenv');
dotenv.config();

const clientId = process.env.CLIENT_ID;
// const questionsForumId = '1020752943793840139';

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

        /* if (message.channel.parentId === questionsForumId) {
            const messages = await message.channel.messages.fetch({ limit: 1 });
            const firstMessage = messages.first();
            if (firstMessage.id === message.id) {
                console.log('Premier message dans ce fil du forum questions!');
                message.reply('Bienvenue dans ce fil de discussion du forum Questions!');
            }
        }*/
    },
};