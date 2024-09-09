const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('discordgate')
        .setDescription('Envoie des informations à propos de DiscordGate, un site basé sur l\'univers de Discord !'),
    async execute(interaction) {
        await interaction.reply({
            embeds: [new EmbedBuilder().setColor(0xff0000)
                .setTitle('DiscordGate: Site web basé sur l\'univers de Discord')
                .setURL('https://discordgate.com/fr')
                .setDescription('Actuellement, DiscordGate est une plateforme qui centralise une série d\'outils dédiés à l\'optimisation de l\'expérience utilisateur sur Discord. Sur le long terme, DiscordGate c\'est bien plus que des outils. L\'objectif est de créer un véritable écosystème autour de Discord, avec des fonctionnalités telles que le référencement de serveurs et d\'applications ou encore des outils d\'analyse pour optimiser la gestion des communautés.')
                .addFields({
                    name: 'DiscordGate',
                    value: 'Pour ceux que ça intéresse: https://discordgate.com/fr',
                    inline: true
                })
                .setImage('https://discordgate.com/meta/home.png')
                .setTimestamp()
                .setFooter({ text: 'Copyright © 2024 Apprendre Discord', iconURL: 'https://cdn.discordapp.com/attachments/943922319011741697/1282441988020371577/logo_apprendre_discord.webp?ex=66df5eac&is=66de0d2c&hm=3fa72ab97c4544393439ac6646329e6246f5e2a6409f8c6f2245649700322899&' })]
        });
    },
}; 