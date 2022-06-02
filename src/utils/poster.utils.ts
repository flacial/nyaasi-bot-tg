import Kitsu from "kitsu"
import { flow } from 'fp-ts/lib/function'
import { Anime } from "../@types/data.type"
import { ERROR_PHOTO } from "../constants"

type AnimeOrError = Promise<{ data: Anime[] }> | null

const api = new Kitsu()

const getAnimePoster = async (anime: Promise<AnimeOrError>) => {
    const animeData = await anime
    const animePoster = animeData?.data[0]?.posterImage?.original

    return animePoster ? animePoster : ERROR_PHOTO
}

const getAnime = async (text: string): Promise<AnimeOrError> => {
    try {
        const poster = await api.fetch('anime', { params: { filter: { text } } })

        return poster
    } catch (err) {
        return null
    }
}

export const getPoster = flow(
    getAnime,
    getAnimePoster,
)

