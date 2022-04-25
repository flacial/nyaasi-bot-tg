import { extractResolution } from "./resolution.utils"

describe('Resolution utility', () => {
    it('Should extract the resolution correctly', () => {
        expect.assertions(1)

        const resolution = '480'
        const title = `Attack on Titan - ${resolution}p`

        expect(extractResolution(title)[0]).toBe(resolution)
    })
})