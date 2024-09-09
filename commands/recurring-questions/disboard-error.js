const { SlashCommandBuilder } = require('discord.js');
const { createDisboardEmbed } = require('../../embeds/disboardEmbed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('disboard-error')
        .setDescription('Explique l\'erreur de Disboard à l\'ajout & modification de serveurs!'),
    async execute(interaction) {
        const embed = createDisboardEmbed();
        await interaction.reply({ embeds: [embed] });
    },
};