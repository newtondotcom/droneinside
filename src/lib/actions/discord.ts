"use server";

export async function sendToDiscordWebhook(
	message: string,
	email: string,
	names: string,
	phone: string,
	project: string
) {
	fetch(process.env.DISCORD_WEBHOOK, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			avatar_url: '',
			content: '@everyone ' + message,
			embeds: [
				{
					color: Constants.color,
					title: 'Nouveau message de ' + names + ' (' + phone + ')',
					description: 'Contact : ' + email + ', Projet : ' + project
				}
			]
		})
	});
	return;
}