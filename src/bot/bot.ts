import 'dotenv/config'
import { pipe } from 'fp-ts/lib/function'
import _ from 'lodash'
import { getItems } from '../utils/feed.util'
import { sendRelease } from '../utils/send.util'
import { storeNewFeedItem } from '../utils/store.util'
import { validateFeed } from '../utils/validate.util'

export const startBot = () => pipe(
    getItems(),
    validateFeed,
    storeNewFeedItem,
    sendRelease
)