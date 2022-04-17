if (!process.env.BOT_TOKEN) throw new Error('Must add a BOT_TOKEN to the .env file for the bot to work')
if (!process.env.CHANNEL_ID) throw new Error('Must add a CHANNEL_ID to the .env file for the bot to work')
if (!process.env.DEV_CHANNEL_ID) throw new Error('Must add a DEV_CHANNEL_ID to the .env file for the bot to work')

export const botToken = process.env.BOT_TOKEN
export const channelId = process.env.CHANNEL_ID
export const devChannelId = process.env.DEV_CHANNEL_ID
