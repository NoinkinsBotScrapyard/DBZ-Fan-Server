const { Client, CommandInteraction } = require("discord.js");
const fs = require("fs");

module.exports = {
    name: "prefix",
    description: "Change the guild prefix",
    type: 'CHAT_INPUT',
    options: [
      {
        name: "new-prefix",
        description: "The new server prefix",
        type: "STRING",
        required: true,
      },
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return await interaction.reply({content: "You do not have permission to use this command."} )
        const prefix = interaction.options.getString("new-prefix");
        fs.writeFile(`${process.cwd()}/guildStuff/${interaction.guild.id}.json`, `{"prefix": "${prefix}"}`, function (err) {
        if (err) throw err;
        });
        await interaction.followUp({ content: `The guild prefix has been changed to ${prefix}`})
    },
};
