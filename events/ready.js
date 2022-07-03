const client = require("../main");

client.on("ready", () => {
	console.log('Online');
	client.user.setPresence({ activities: [{ name: 'Launching Boomer Latin Teacher TheAwesomeGuy47 onto the moon.' }], status: 'online' });
});