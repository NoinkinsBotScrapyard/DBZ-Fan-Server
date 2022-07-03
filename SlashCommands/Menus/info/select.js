const { Client, CommandInteraction, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    id: "selectMenus",
    run: async (client, interaction, args) => {
		if(interaction.value === 'first_option') {
			await interaction.followUp('It worked.')
		}
    },
};
