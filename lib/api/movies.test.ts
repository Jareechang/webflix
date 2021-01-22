import * as api from './movies' 

import {
    Movie
} from '../../types/movie'

describe('lib/api', () => {
    describe('getPopularMovies()', () => {
        it('should append slug to the movies in the results', async() => {
            const { results } = await api.getPopularMovies()
            results.forEach((result: Movie) => {
                expect(result.slug).toBeTruthy()
            });
        })
    })

    describe('getMovieBySlug()', () => {
        it('should fetch the movie by slug name (case: Wonder Women 1984)', async() => {
            const movie = await api.getMovieBySlug('wonder-woman-1984')
            expect(movie.id).toEqual(464052)
            expect(movie.title).toEqual('Wonder Woman 1984')
        })
        it('should fetch the movie by slug name (case: The Coords A New Age)', async() => {
            const movie = await api.getMovieBySlug('the-croods-a-new-age')
            expect(movie.id).toEqual(529203)
            expect(movie.title).toEqual('The Croods: A New Age')
        })
    })
})
