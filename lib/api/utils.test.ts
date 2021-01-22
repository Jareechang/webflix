import {
    addUrlSlug,
    createSlug
} from './utils'

import {
    getPopularMovies
} from '../../lib/api/movies'

import {
    Movie
} from '../../types/movie'

describe('api.utils', () => {
    describe('createSlug', () => {
        it('should handle cases with \' in the title', () => {
            expect(createSlug('This is movie\'s title')).toEqual('this-is-movies-title')
        })
        it('should handle cases with \" in the title', () => {
            expect(createSlug('This is movie\"s title')).toEqual('this-is-movies-title')
        })
    })

    describe('addUrlSlug()', () =>{
        it('should append slug onto the movie', async() => {
            const popularMovies = await getPopularMovies()
            const movie : Movie = addUrlSlug(popularMovies.results[0])
            expect(movie.slug).toEqual('wonder-woman-1984')
        })
    })
})
