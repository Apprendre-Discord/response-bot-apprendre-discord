const { SlashCommandBuilder } = require('discord.js');
const { createChannelDeplacementEmbed } = require('../../embeds/channelDeplacementEmbed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('channel-deplacement')
        .setDescription('Explique l\'erreur lorsque les utilisateurs ne peuvent pas déplacer un salon!'),
    async execute(interaction) {
        const embed = createChannelDeplacementEmbed();
        await interaction.reply({ embeds: [embed] });
    },
};