import {
    addUrlSlug
} from './utils'

import {
    getPopularMovies
} from '../../lib/api/movies'

import {
    Movie
} from '../../types/movie'

describe('api.utils', () => {
    it('should append slug onto the movie', async() => {
        const popularMovies = await getPopularMovies()
        const movie : Movie = addUrlSlug(popularMovies.results[0])
        expect(movie.slug).toEqual('wonder-woman-1984')
    })
})
