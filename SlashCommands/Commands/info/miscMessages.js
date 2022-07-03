const { Client, CommandInteraction, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
    name: "misc",
    description: "Messages like verify",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "verify",
            description: "Verify message",
            type: 1
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: `You do not have permission to do this command.` })
        if (interaction.options.getSubcommand() === 'verify') {
            const verify = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('verify')
					.setLabel('Verify!')
					.setStyle('SUCCESS')
                    .setEmoji('✅'),
			);
            await interaction.followUp({ content: `Verify message will be below, please delete this message` })
            interaction.channel.send({ content: `Click the button below to verify`, components: [ verify ]})
        }
    },
};
