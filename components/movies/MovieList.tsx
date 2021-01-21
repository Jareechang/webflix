import {
    useRef,
    useEffect,
    useState
} from 'react'

import {
    Box,
    Badge,
    Grid,
    CardActions,
    CardContent,
    CardActionArea
} from '@material-ui/core'

import { useRouter } from 'next/router'

import Skeleton from '@material-ui/lab/Skeleton';

import Typography from '../mui/Typography'

import * as utils from './utils'

import {
    getImageUrl
} from '../../lib/images'

export interface Movie {
    adult: boolean;
    backdrop_path: string; 
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string; 
    overview: string;
    popularity: number; 
    poster_path: string;
    // Date string
    release_date: string; 
    title: string; 
    video: boolean;
    vote_average: number; 
    vote_count: number;

    /*
     * The limit for amount of text to display in the cad
     *
     * **/
    descriptionPreviewLimit?: number;
}

export interface MovieListProps {
    /*
     * Title of the section
     * **/
    sectionTitle: string;

    /*
     * description of the section
     * **/
    sectionDescription: string;

    movies: Movie[];
}

import * as styled from './styled'

const MovieList : React.FC<MovieListProps> = (
    props: MovieListProps
) => {
    const nextRouter = useRouter()
    const {
        movies = [],
        sectionTitle = '',
        sectionDescription = ''
    } = props

    if (!movies && !Array.isArray(movies)) return null

    const navigateToMovie = (movieId: string) => {
        return (e) => {
            e.preventDefault()
            const href = `/movies/${movieId}`
            nextRouter.push(href)
        }
    }

    const renderCard = (movie) => {
        const [imageLoaded, setImageLoaded] = useState(false)
        const imageRef = useRef()

        useEffect(() => {
            if (imageRef.current && imageRef.current.complete) {
                setImageLoaded(true)
            }
        }, [imageRef.current, movie])

        return (
            <Box
                my={2}
                mr={3}
                key={movie.title}>
                <styled.Card square elevation={0}>
                    <CardActionArea onClick={navigateToMovie(movie.id)}>
                        {!imageLoaded && (
                            <Skeleton
                                variant="rect"
                                width={350}
                                height={450}
                            />
                        )}
                        <styled.CardMedia 
                            ref={imageRef}
                            title={movie.title}
                            image={getImageUrl(movie.poster_path)}
                            component="img"
                            onLoad={() => setImageLoaded(true)}
                            imageLoaded={imageLoaded} />
                        <styled.CardContent>
                            <Box>
                                <styled.StarIcon
                                    display="inline-block"
                                    fontSize="small" />
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                    display="inline-block"
                                    gutterBottom>
                                    {movie.vote_average}
                                </Typography>
                            </Box>
                            <Box pt={1}>
                                <styled.Typography variant="h6">
                                    {movie.title}
                                </styled.Typography>
                                <Box>
                                    <Typography
                                        color="textSecondary"
                                        variant="body1"
                                        display="inline-block"
                                        gutterBottom>
                                        {movie.release_date}
                                    </Typography>
                                </Box>
                                <Box pt={1}>
                                    <Typography variant="body2">
                                        {utils.trimByCharacters(movie.overview, 85)}
                                    </Typography>
                                </Box>
                            </Box>
                        </styled.CardContent>
                    </CardActionArea>
                </styled.Card>
            </Box>
        )
    }

    return (
        <>
            <Box my={1}>
                <Typography
                    bold
                    uppercase
                    variant="h6">
                    {sectionTitle}
                </Typography>
                <Typography variant="body2">{sectionDescription}</Typography>
            </Box>
            <styled.Grid>
                {movies.map(movie => renderCard(movie))}
            </styled.Grid>
        </>
    )
}

export default MovieList;
