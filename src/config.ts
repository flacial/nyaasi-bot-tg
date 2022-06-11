if (!process.env.BOT_TOKEN) throw new Error('Must add a BOT_TOKEN to the .env file for the bot to work')
if (!process.env.CHANNEL_ID) throw new Error('Must add a CHANNEL_ID to the .env file for the bot to work')
if (!process.env.ACCESS_SECRET) throw new Error('Must add a ACCESS_SECRET to the .env file for the bot to work')
if (!process.env.DATABASE_URL) throw new Error('Must add a DATABASE_URL to the .env file for the bot to work')
if (!process.env.DEV_CHANNEL_ID)
    throw new Error('Must add a DEV_CHANNEL_ID to the .env file for the bot to work. Even if it is invalid')

export const botToken = process.env.BOT_TOKEN
export const channelId = process.env.CHANNEL_ID
export const devChannelId = process.env.DEV_CHANNEL_ID
