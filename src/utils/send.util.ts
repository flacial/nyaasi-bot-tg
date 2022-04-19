import { FeedItem, ALLOWED_CATEGORIES, State } from "../@types/data.type"
import { sendPhotoWithCaption } from "./sendPhotoWithCaption.util"

export const sendReleases = async (feedItems: FeedItem[], i = feedItems.length - 1) => {
    if (i < 0) return

    const feedItem = feedItems[i]

    if (feedItem.categoryId === ALLOWED_CATEGORIES.translatedAnime) await sendPhotoWithCaption(feedItem)

    i -= 1

    setTimeout(() => sendReleases(feedItems, i), 2000)
}

export const sendRelease = async (state: State) => {
    if (!(await state)) return 'No new release'

    const { x, storedFeedItemIndex } = await state
    const lateRelease = Array.isArray(x)
    const startingIndex = storedFeedItemIndex < 0
        ? lateRelease && x.length - 1
        : storedFeedItemIndex - 1

    lateRelease ? await sendReleases(x, startingIndex) : await sendPhotoWithCaption(x)

    return { ...state }
}