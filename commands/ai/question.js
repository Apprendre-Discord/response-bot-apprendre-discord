const { SlashCommandBuilder } = require('discord.js');
const ai = require('../../utils/ai');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('question')
        .setDescription('Replies with AI!')
        .setDefaultMemberPermissions(0)
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input')),

    async execute(interaction) {
        try {
            const assistant = await ai.createAssistantIfNeeded();
            const assistantId = assistant.id;

            const thread = await ai.createThread();
            const threadId = thread.id;

            await ai.addMessage(threadId, interaction.options.getString('input'));

            const run = await ai.runAssistant(assistantId, threadId);
            console.log("Run: ", run);

            await ai.checkingStatus(threadId, run.id);

            await interaction.reply("L'exécution est en cours !");
        } catch (error) {
            console.error("Error during execution: ", error);
            await interaction.reply("Il y a eu une erreur pendant l'exécution de l'assistant.");
        }
    },
};
