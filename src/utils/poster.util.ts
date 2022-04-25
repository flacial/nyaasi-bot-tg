import Kitsu from "kitsu"
import { flow } from 'fp-ts/lib/function'
import { Anime } from "../@types/data.type"
import { ERROR_PHOTO } from "../constants"

type AnimeOrError = Promise<{ data: Anime[] }> | null

const api = new Kitsu()

const animePoster = async (anime: AnimeOrError) => {
    const animeData = await anime
    const animePoster = animeData?.data[0]?.posterImage?.original

    return animePoster ? animePoster : ERROR_PHOTO
}

const getAnime = (text: string): AnimeOrError => {
    try {
        return api.fetch('anime', { params: { filter: { text } } })
    } catch (err) {
        return null
    }
}

export const getPoster = flow(
    getAnime,
    animePoster,
)

