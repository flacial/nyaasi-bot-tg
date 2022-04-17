import { State } from "../@types/data.type"
import { storage } from './storageInstance.util'

export const storeNewFeedItem = async (state: State) => {
    if ((await state)) {
        const newFeedItem = (await state).x
    
        !Array.isArray(newFeedItem)
            ? await storage.add(newFeedItem.hash, newFeedItem.title)
            : await storage.add(newFeedItem[0].hash, newFeedItem[0].title)
    }

    return state
}