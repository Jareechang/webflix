import {
    useRef,
    useEffect,
    useState
} from 'react'

import {
    Box,
    Grid,
    CardActions,
    CardContent,
    CardActionArea
} from '@material-ui/core'

import Skeleton from '@material-ui/lab/Skeleton';

import Typography from '../mui/Typography'

import * as utils from './utils'

export interface Movie {
    /*
     * Title of the movie
     * **/
    title: string;

    /*
     * Description of the movie
     * **/
    description: string;

    /*
     * The limit for amount of text to display in the cad
     *
     * **/
    descriptionPreviewLimit?: number;

    /*
     * image url 
     * **/
    imageUrl: string;
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
    const {
        movies = [],
        sectionTitle = '',
        sectionDescription = ''
    } = props

    if (!movies && !Array.isArray(movies)) return null

    const renderCard = (movie) => {
        const [imageLoaded, setImageLoaded] = useState(false)
        const imageRef = useRef()

        useEffect(() => {
            if (imageRef.current && imageRef.current.complete) {
                setImageLoaded(true)
            }
        }, [imageRef.current])

        return (
            <Box
                my={2}
                mr={3}
                key={movie.title}>
                <styled.Card square elevation={0}>
                    <CardActionArea>
                        {!imageLoaded && (
                            <Skeleton
                                variant="rect"
                                width={350}
                                height={250}
                            />
                        )}
                        <styled.CardMedia 
                            ref={imageRef}
                            title={movie.title}
                            image={movie.imageUrl}
                            component="img"
                            imageLoaded={imageLoaded} />
                        <styled.CardContent>
                            <Box p={1}>
                                <styled.Typography variant="h6" gutterBottom>{movie.title}</styled.Typography>
                                <Typography variant="body2">
                                    {utils.trimDescription(movie.description, 75)}
                                </Typography>
                            </Box>
                        </styled.CardContent>
                    </CardActionArea>
                </styled.Card>
            </Box>
        )
    }

    return (
        <>
            <Box my={2}>
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
