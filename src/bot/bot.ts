import 'dotenv/config'
import { pipe } from 'fp-ts/lib/function'
import _ from 'lodash'
import { getItems } from '../utils/feed.utils'
import { sendRelease } from '../utils/send.utils'
import { storeNewFeedItem } from '../utils/store.utils'
import { validateFeed } from '../utils/validate.utils'

export const startBot = () => pipe(
    getItems(),
    validateFeed,
    storeNewFeedItem,
    sendRelease
)