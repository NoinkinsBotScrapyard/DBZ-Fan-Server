const { Client, CommandInteraction, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "selectmenu",
    description: "Sends a select menu",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('selectMenus')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option'
						},
						{
							label: 'Remove Menu',
							description: 'Removes the Menu',
							value: 'second_option'
						}
					]),
			);
        await interaction.editReply({ content: `Select menu`, components: [ row ]})
    }
};
