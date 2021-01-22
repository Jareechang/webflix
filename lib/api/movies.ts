import popularMovies from './mocks/popular_movies.json'

import {
    Movie
} from '../../types/movie'

import {
    addUrlSlug
} from './utils'

export const getPopularMovies = async() : Promise<{ results: Movie[] }> => {
    return new Promise((resolve, reject) => {
        const results = popularMovies.results.map((movie: Movie) => {
            return addUrlSlug(movie)
        })
        resolve({
            ...popularMovies,
            ...{ results }
        })
    })
}

export const getMovieBySlug = async(slug: string) : Promise<any> => {
    return new Promise((resolve, reject) => {
        const { results } = popularMovies
        const movie = results.filter((result: Movie) => result.slug === slug)[0]
        resolve(movie)
    })
}

export const getMovie = async(id: number) : Promise<any> => {
    return new Promise((resolve, reject) => {
        const { results } = popularMovies
        const movie = results.filter(result => result.id === id)[0]
        resolve(movie)
    })
}
