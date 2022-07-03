const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "tpo",
    description: "The pecking order",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ files: });
    },
};
