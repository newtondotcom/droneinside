"use server";

interface DiscordWebhookPayload {
  avatar_url?: string;
  content: string;
  embeds: Array<{
    color?: number;
    title: string;
    description: string;
  }>;
}

export async function sendToDiscordWebhook(
  message: string,
  email: string,
  names: string,
  phone: string,
  project: string,
): Promise<void> {
  if (!process.env.DISCORD_WEBHOOK) {
    console.error("DISCORD_WEBHOOK environment variable is not set");
    return;
  }

  const payload: DiscordWebhookPayload = {
    content: `@everyone ${message}`,
    embeds: [
      {
        color: 1752220, // Teal color
        title: `Nouveau message de ${names} (${phone})`,
        description: `Contact: ${email}, Projet: ${project}`,
      },
    ],
  };

  try {
    const response = await fetch(process.env.DISCORD_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Discord webhook failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to send to Discord webhook:", error);
  }
}
