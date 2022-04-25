const RESOLUTIONS = ['1080', '720', '480']

export const extractResolution = (title: string) => RESOLUTIONS.filter(res => title.includes(res))