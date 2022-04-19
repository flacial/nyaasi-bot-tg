import { FeedItem, ALLOWED_CATEGORIES } from "../@types/data.type"
import { getItem } from "./feed.util"
import { storage } from "./storageInstance.util"

export const validateFeed = async (getItems: Promise<FeedItem[]>) => {
    const feedItems = await getItems
    
    const newFeedItem = await getItem(feedItems)
    if (!newFeedItem) return null

    const hashes = await storage.toArrayByKeys()
    const lastStoredHash = hashes[hashes.length - 1]

    const oldRelease = newFeedItem.hash === lastStoredHash
    if (oldRelease) return null

    const storedFeedItemIndex = feedItems.findIndex(item => item.hash === lastStoredHash)
    
    const lastFeedItem = storedFeedItemIndex === 0 
    const feedItemNotFound = storedFeedItemIndex === -1
    const manyFeedItems = storedFeedItemIndex > 0

    if (newFeedItem.categoryId !== ALLOWED_CATEGORIES.translatedAnime && lastFeedItem) {
        return null
    }

    return {
        x:  (feedItemNotFound || manyFeedItems) ? feedItems : newFeedItem,
        storedFeedItemIndex
    }
}