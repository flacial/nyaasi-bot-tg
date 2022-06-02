import { State } from "../@types/data.type"
import { storage } from './storageInstance.utils'
import { prisma } from '../utils/prisma.utils'

export const storeNewFeedItem = async (state: State) => {
    if ((await state)) {
        const newFeedItem = (await state).x
    
        // Comment if you chose to store locally in a file
        await prisma.hashes.deleteMany({})
        await prisma.hashes.create({
            data: {
                hash: !Array.isArray(newFeedItem) ? newFeedItem.hash : newFeedItem[0].hash
            }
        })

        // Uncomment for storing locally in a file
        // !Array.isArray(newFeedItem)
        //     ? await storage.add(newFeedItem.hash, newFeedItem.title)
        //     : await storage.add(newFeedItem[0].hash, newFeedItem[0].title)
    }

    return state
}