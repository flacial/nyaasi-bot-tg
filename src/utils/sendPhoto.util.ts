import { FeedItem } from "../@types/data.type"
import { bot } from "../bot/index"
import { channelId } from "../config"
import { createCaption } from "./caption.utils"

export const sendPhotoWithCaption = async (feedItem: FeedItem) => {
    const {
        titleCaption,
        resolutionCaption,
        torrentCaption,
        magnetCaption,
        sizeCaption,
        dateCaption,
        poster
    } = await createCaption(feedItem)

    const caption = `
${titleCaption}
${resolutionCaption}
\n
${torrentCaption}
${magnetCaption}
${sizeCaption}
${dateCaption}
`

    await bot.sendPhoto(channelId, poster, {
        caption,
        parse_mode: 'HTML'
    })

    return feedItem
}