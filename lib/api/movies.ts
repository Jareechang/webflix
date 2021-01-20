import popularMovies from './mocks/popular_movies.json'

export const getPopularMovies = async() : Promise<any> => {
    return new Promise((resolve, reject) => {
        resolve(popularMovies)
    })
}

export const getMovie = async(id) : Promise<any> => {
    return new Promise((resolve, reject) => {
        const { results } = popularMovies
        const movie = results.filter(result => result.id === id)[0]
        resolve(movie)
    })
}
