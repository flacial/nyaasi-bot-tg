import { FeedItem, ALLOWED_CATEGORIES } from "../@types/data.type"
import { getItem } from "./feed.utils"
import { prisma } from "./prisma.utils"
import { storage } from "./storageInstance.utils"

export const validateFeed = async (getItems: Promise<FeedItem[]>) => {
    const feedItems = await getItems
    
    const newFeedItem = await getItem(feedItems)
    if (!newFeedItem) return null

    const hashes = await prisma.hashes.findMany({})
    const lastStoredHash = hashes[0].hash

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