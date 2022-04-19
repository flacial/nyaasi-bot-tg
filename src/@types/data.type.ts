import { Item } from "rss-parser"

export type Anime = {
    slug: string
    description: string
    status: 'finished' | 'continue'
    episodeCounter: number
    titles: {
        en: string
        en_jp: string
        ja_jpp: string
    }
    posterImage: {
        original: string
    }
}

export interface FeedItem extends Item {
    guid: string,
    categoryId: string,
    hash: string,
    category: string,
    size: string
}

export enum ALLOWED_CATEGORIES {
    translatedAnime = '1_2'
}

export type State = Promise<{ x: FeedItem[] | FeedItem; storedFeedItemIndex: number } | null>