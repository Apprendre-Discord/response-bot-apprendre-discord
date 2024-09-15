const { Events } = require('discord.js');
const ai = require('../utils/ai');

const questionsForumId = '1020752943793840139';

module.exports = {
    name: Events.ThreadCreate,
    async execute(thread) {
        if (thread.parentId === questionsForumId) {
            thread.send('Bienvenue dans ce fil de discussion du forum Questions!');

            const starterMessage = await thread.fetchStarterMessage();
            if (starterMessage) {
                const result = await ai.createCompletion(starterMessage.content);
                await starterMessage.reply(result.content);
            }
        }
    }
}