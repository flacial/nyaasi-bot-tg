import { formatTitle } from "./title.utils"

describe('Title utility', () => {
    it('Should remove the brackets', () => {
        expect.assertions(1)
        
        const title = 'Attack on Titan [480p] [320p]'

        expect(formatTitle(title)).toBe('Attack on Titan')
    })

    it('Should remove the parenthesis', () => {
        expect.assertions(1)
        
        const title = 'Attack on Titan (480p) (320p)'

        expect(formatTitle(title)).toBe('Attack on Titan')
    })

    it('Should remove the extension', () => {
        expect.assertions(1)
        
        const title = 'Attack on Titan.mp4'

        expect(formatTitle(title)).toBe('Attack on Titan')
    })

    it('Should remove the extra spaces', () => {
        expect.assertions(1)
        
        const title = 'Attack on Titan    '

        expect(formatTitle(title)).toBe('Attack on Titan')
    })
})