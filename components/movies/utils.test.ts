import {
    ellipsis,
    trimByWords,
    trimByCharacters
} from './utils'

describe('utils', () => {

    describe('utils.trimByWords()', () => {
        it('should return shorten description by length words', () => {
            const limit : number = 3
            const text : string = 'this is a long string that needs to be trimmed' 
            const newText : string = trimByWords(text, limit)
            expect(newText.split(' ').length).toEqual(limit)
        })
    })

    describe('utils.trimByCharacters()', () => {
        it('should return shorten text by character length', () => {
            const text : string = 'this is a long string that needs to be trimmed' 
            const limit : number = 3
            const ellipsisLength : number = ellipsis.length
            const characterLength : number = trimByCharacters(text, limit).length
            expect(characterLength).toEqual(limit + ellipsisLength)
        })

        it('should return shorten text by character length, excluding ellipsis (if provided)', () => {
            const text : string = 'this is a long string that needs to be trimmed' 
            const limit : number = 3
            const characterLength : number = trimByCharacters(text, limit, false).length
            expect(characterLength).toEqual(limit)
        })
    })
})
