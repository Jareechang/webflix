import {
    Movie
} from '../../types/movie';


export const createSlug = (title: string) : string => {
    return title.toLowerCase().split(' ').join('-')
}

export const addUrlSlug = (movie: Movie) => {
    movie.slug = createSlug(movie.title)
    return movie
}
