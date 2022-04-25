import { JSDOM } from "jsdom";
import { FeedItem } from "../@types/data.type";
import axios from 'axios'

export const getItemHTML = async (item: FeedItem | Promise<FeedItem>): Promise<{ data: string }> => axios.get((await item).guid)

export const getMagnet = async (html: Promise<{ data: string }>, errorTimes = 0) => {
    try {
        const HTML = await html
        const { window: { document } } = new JSDOM(HTML.data)
        const magnet = document.querySelector('.card-footer-item') as HTMLAnchorElement

        return magnet?.href
    } catch (err) {
        if (errorTimes >= 10) return null

        await getMagnet(html, errorTimes + 1)
    }
}