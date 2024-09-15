const OpenAI = require("openai");
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let pollingInterval;

async function createAssistantIfNeeded() {
    try {
        const existingAssistants = await openai.beta.assistants.list();
        const existingAssistant = existingAssistants.data.find(
            (assistant) => assistant.name === "ProfCord"
        );

        if (existingAssistant) {
            console.log("Assistant already exists:", existingAssistant);
            return existingAssistant; // Return the existing assistant if found
        }

        // If not found, create a new assistant
        const assistant = await openai.beta.assistants.create({
            name: "ProfCord",
            instructions:
                "Profcord is a highly knowledgeable and friendly Discord bot, designed specifically to help users with everything related to Discord. The bot should act as an expert guide, offering clear, concise, and accurate answers to any questions about Discord’s features, best practices, and technical issues.",
            model: "gpt-4o-mini",
            tools: [{ type: "code_interpreter" }],
        });

        console.log("New assistant created:", assistant);
        return assistant;
    } catch (error) {
        console.error("Error creating assistant:", error);
    }
}

async function createThread() {
    console.log("Creating a new thread...");
    const thread = await openai.beta.threads.create();
    console.log(thread);
    return thread;
}

async function addMessage(threadId, message) {
    console.log("Adding a new message to thread: " + threadId);
    const response = await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: message,
    });
    return response;
}

async function runAssistant(assistantId, threadId) {
    console.log("Running assistant for thread: " + threadId);
    const response = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
    });

    console.log(response);

    return response;
}

async function checkingStatus(threadId, runId) {
    const runObject = await openai.beta.threads.runs.retrieve(threadId, runId);

    const status = runObject.status;
    console.log(runObject);
    console.log("Current status: " + status);

    if (status == "completed") {
        clearInterval(pollingInterval);
        console.log("The assistant has completed its task.");

        const messagesList = await openai.beta.threads.messages.list(threadId);
        let messages = [];

        messagesList.body.data.forEach((message) => {
            messages.push(message.content);
        });

        return messages;
    }
}

async function createCompletion(message) {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                "role": "system",
                "content": `Profcord is a highly knowledgeable and friendly Discord bot, specifically designed to help users with all things related to Discord. 
                Profcord should always act as an expert guide, providing clear, concise, and accurate answers on Discord’s features, best practices, and technical issues.
                
                Here are specific guidelines Profcord must always follow:
                - Never recommend bots like MEE6. Instead, prefer alternatives such as Dyno or Draftbot, which offer more flexibility and are often better received by the community.
                - When explaining advanced concepts (such as permissions or bot management), always ensure that users of all skill levels can understand.
                - Encourage best security practices on Discord, like two-factor authentication (2FA) and proper role management.
                - Remain neutral and kind in all responses, avoiding potential debates or controversies.
                - Provide practical examples whenever possible to help users apply the advice easily.
                - Offer official documentation or video guides from "Apprendre Discord" to complement answers when relevant.
                - If a member asks about recent features or bugs, make sure to provide up-to-date information or links to relevant discussions (e.g., Discord’s official forums).

                Profcord must respond to all user inquiries in **French**, while maintaining a supportive and educational tone that helps members maximize their Discord experience.`
            },
            { "role": "user", "content": message },
        ],
        model: "gpt-4o-mini",
    });
    return completion.choices[0].message;
}



module.exports = { createAssistantIfNeeded, createThread, addMessage, runAssistant, checkingStatus, createCompletion };