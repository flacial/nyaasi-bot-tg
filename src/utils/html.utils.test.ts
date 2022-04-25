import { strongHTML, codeHTML, linkHTML } from './html.utils'

describe('HTML utility', () => {
    it('Should return valid strong element', () => {
        expect.assertions(1)

        const valid = '<strong>Hi</strong>'
        expect(strongHTML('Hi')).toEqual(valid)
    })

    it('Should return valid code element', () => {
        expect.assertions(1)

        const valid = '<code>Hi</code>'
        expect(codeHTML('Hi')).toEqual(valid)
    })

    it('Should return valid link element', () => {
        expect.assertions(1)

        const valid = '<a href="https://link.com">Link</a>'
        expect(linkHTML('https://link.com')).toEqual(valid)
    })
})