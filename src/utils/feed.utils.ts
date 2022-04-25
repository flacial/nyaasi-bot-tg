import Parser from 'rss-parser';
import { pipe } from 'fp-ts/lib/function'
import { NYAASI_RSS } from '../constants'
import { FeedItem } from '../@types/data.type';

const parser = new Parser({
    customFields: {
        item: [
            ['nyaa:categoryId', 'categoryId'],
            ['nyaa:infoHash', 'hash'],
            ['nyaa:category', 'category'],
            ['nyaa:size', 'size'],
        ]
    }
});

export const getFeed = () => parser.parseURL(NYAASI_RSS) as Promise<Parser.Output<FeedItem>>

export const getItems = () => pipe(
    getFeed(),
    feed => feed.then(e => e.items),
)

export const getItem = async (items: Promise<FeedItem[]> | FeedItem[]) => {
    return pipe(
        await items,
        item => item[0]
    )
}