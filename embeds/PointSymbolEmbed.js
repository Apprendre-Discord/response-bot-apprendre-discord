const { EmbedBuilder } = require("discord.js");

function createPointSymbolEmbed() {
  return new EmbedBuilder()
    .setColor(0xff0000)
    .setTitle("Copier-coller le symbole・")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/943922319011741697/1282441988020371577/logo_apprendre_discord.webp?ex=66df5eac&is=66de0d2c&hm=3fa72ab97c4544393439ac6646329e6246f5e2a6409f8c6f2245649700322899&"
    )
    .setDescription(
      "Le symbole ```・``` est un des symboles les plus utilisés pour personnaliser le nom d'un salon sur son serveur Discord. Pour l'tiliser, il vous suffit de le copier, de sélectionner le salon à modifier et de l'insérer juste avant le nom de celui-ci (Derrière un emoji en général)."
    )
    .addFields({
      name: "Le meilleur site pour trouver d'autres symboles pour mon salon",
      value:
        "[discordgate.com/symbols](https://discordgate.com/fr/tools/symbols)",
      inline: true,
    })
    .setImage(
      "https://cdn.discordapp.com/attachments/1210328653833969766/1282616062826905631/Capture_decran_2024-09-09_101735.png?ex=66e000cb&is=66deaf4b&hm=8a819c8b37385ce73a063fe4c3598b14480ee8c5a75536796ecffe9795af20ca&"
    )
    .setTimestamp()
    .setFooter({
      text: "Copyright © 2024 Apprendre Discord",
      iconURL:
        "https://cdn.discordapp.com/attachments/943922319011741697/1282441988020371577/logo_apprendre_discord.webp?ex=66df5eac&is=66de0d2c&hm=3fa72ab97c4544393439ac6646329e6246f5e2a6409f8c6f2245649700322899&",
    });
}

module.exports = { createPointSymbolEmbed };
