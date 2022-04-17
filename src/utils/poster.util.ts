import Kitsu from "kitsu"
import { flow } from 'fp-ts/lib/function'
import { Anime } from "../@types/data.type"

const api = new Kitsu()

const animePoster = async (anime: Promise<{ data: Anime[] }>) => (await anime).data[0].posterImage.original

const getAnime = (text: string) => api.fetch('anime', { params: { filter: { text } } })

export const getPoster = flow(
    getAnime,
    animePoster,
)