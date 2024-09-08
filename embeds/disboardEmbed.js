const { EmbedBuilder } = require('discord.js');

function createDisboardEmbed() {
    return new EmbedBuilder()
        .setColor(0xff0000)
        .setTitle('Erreur Disboard: This server is currently under review')
        .setThumbnail('https://cdn.discordapp.com/attachments/943922319011741697/1282441988020371577/logo_apprendre_discord.webp?ex=66df5eac&is=66de0d2c&hm=3fa72ab97c4544393439ac6646329e6246f5e2a6409f8c6f2245649700322899&')
        .setDescription('Cette erreur est normalement temporaire. Nous ne pouvons pas vous aider, ce sont les administrateurs de Disboard qui ont fait ce choix. Rejoignez leur serveur support pour avoir plus d\'informations.')
        .addFields({ name: 'Mon avis sur Disboard', value: 'Pour découvrir mon avis sur Disboard: [Vidéo](https://www.youtube.com/watch?v=Sce4THbWa2A)', inline: true })
        .setTimestamp()
        .setFooter({ text: 'Copyright © 2024 Apprendre Discord', iconURL: 'https://cdn.discordapp.com/attachments/943922319011741697/1282441988020371577/logo_apprendre_discord.webp?ex=66df5eac&is=66de0d2c&hm=3fa72ab97c4544393439ac6646329e6246f5e2a6409f8c6f2245649700322899&' });
}

module.exports = { createDisboardEmbed };
