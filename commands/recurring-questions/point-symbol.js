const { SlashCommandBuilder } = require("discord.js");
const { createPointSymbolEmbed } = require("../../embeds/PointSymbolEmbed");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("point-symbol")
    .setDescription(
      "Copie colle le ・, explique comment l'utiliser et donne le meilleur site pour trouver des symboles !"
    ),
  async execute(interaction) {
    const embed = createPointSymbolEmbed();
    await interaction.reply({ embeds: [embed] });
  },
};
