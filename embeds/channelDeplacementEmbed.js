const { EmbedBuilder } = require('discord.js');

function createChannelDeplacementEmbed() {
    return new EmbedBuilder()
        .setColor(0xff0000)
        .setTitle('Si vous ne parvenez pas à déplacer un salon, c\'est probablement à cause de ça.')
        .setThumbnail('https://cdn.discordapp.com/attachments/943922319011741697/1282441988020371577/logo_apprendre_discord.webp?ex=66df5eac&is=66de0d2c&hm=3fa72ab97c4544393439ac6646329e6246f5e2a6409f8c6f2245649700322899&')
        .setDescription('En partant du principe que vous avez les permissions nécessaires pour gérer les salons, vous pouvez en théorie les déplacer sur votre serveur comme bon vous semble. Si ce n\'est pas le cas, vous devez cliquer sur le nom de votre serveur et cliquer sur "Montrer tous les salons".')
        .setImage('https://cdn.discordapp.com/attachments/943922319011741697/1282771182894059710/Capture_decran_2024-09-09_203428.png?ex=66e09142&is=66df3fc2&hm=6e82a08d7e6747fe4412872d41400f536280bb1ea0e493cfcc6b674649e852f5&')
        .setTimestamp()
        .setFooter({ text: 'Copyright © 2024 Apprendre Discord', iconURL: 'https://cdn.discordapp.com/attachments/943922319011741697/1282441988020371577/logo_apprendre_discord.webp?ex=66df5eac&is=66de0d2c&hm=3fa72ab97c4544393439ac6646329e6246f5e2a6409f8c6f2245649700322899&' });
}

module.exports = { createChannelDeplacementEmbed };
