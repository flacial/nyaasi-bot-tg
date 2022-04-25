import { pipe } from "fp-ts/lib/function"
import { FeedItem } from "../@types/data.type"
import { MAGNET_ERROR, MAGNET_REDIRECT } from "../constants"
import { formatTitle } from "./title.utils"
import { getItemHTML, getMagnet } from "./data.utils"
import { getPoster } from "./poster.utils"
import { extractResolution } from "./resolution.utils"
import { strongHTML, codeHTML, linkHTML } from "./html.utils"

export const createCaption = async (item: FeedItem) => {
    const title = item?.title
    const poster = title && await getPoster(title)

    const titleCaption = title ? `<strong>Title:</strong> ${formatTitle(title)}` : ''

    const resolution = extractResolution(title)
    const resolutionCaption = resolution.length ? `${strongHTML('Resolution:')} ${codeHTML(`${resolution}p`)}` : ''

    const torrent = item?.link
    const torrentCaption = torrent ? `${strongHTML('Torrent:')} ${linkHTML(torrent)}` : ''

    const magnet = await pipe(
        item,
        getItemHTML,
        getMagnet
    )
    const magnetBase64 = magnet && Buffer.from(magnet).toString('base64')
    const magnetCaption = `${strongHTML('Magnet:')} ${magnet ? linkHTML(`${MAGNET_REDIRECT}${magnetBase64}`) : MAGNET_ERROR}`
    
    const size = item?.size
    const sizeCaption = size ? `${strongHTML('Size:')} ${codeHTML(size)}` : ''

    const date = item?.pubDate?.replace('-0000', '')
    const dateCaption = date ? `${strongHTML('Date:')} ${codeHTML(date)}` : ''

    return {
        titleCaption,
        resolutionCaption,
        torrentCaption,
        magnetCaption,
        sizeCaption,
        dateCaption,
        poster
    }
}