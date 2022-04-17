import { FeedItem, ALLOWED_CATEGORIES } from "../@types/data.type"
import { getItem } from "./feed.util"
import { storage } from "./storageInstance.util"

export const validateFeed = async (getItems: Promise<FeedItem[]>) => {
    const feedItems = await getItems
    const newFeedItem = await getItem(feedItems)

    const hashes = await storage.toArrayByKeys()
    const lastStoredHash = hashes[hashes.length - 1]

    const isNewRelease = newFeedItem.hash !== lastStoredHash
    if (!isNewRelease) return null

    const lastStoredFeedItemIndex = feedItems.findIndex(item => item.hash === lastStoredHash)
    const isNotLastFeedItem = lastStoredFeedItemIndex > 0

    if (newFeedItem.categoryId !== ALLOWED_CATEGORIES.translatedAnime && !isNotLastFeedItem) {
        return null
    }

    return {
        x: isNotLastFeedItem ? feedItems : newFeedItem,
        lastStoredFeedItemIndex
    }
}