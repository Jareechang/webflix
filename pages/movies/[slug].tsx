import React from 'react'
import {
    GetServerSideProps,
    NextPageContext
} from 'next'
import { useRouter } from 'next/router'

import {
    Button,
    Box
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import Typography from '../../components/mui/Typography.tsx'
import Background from '../../components/movies/details/Background'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { ButtonSpan } from '../../components/movies/details/styled'

import {
    getMovieBySlug
} from '../../lib/api/movies'

export interface MovieDetails {
    movie: any;
}

const MovieDetails : React.FC<MovieDetails> = (
    props: MovieDetails
) => {
    const { movie } = props
    const nextRouter = useRouter()

    const navigateHome = React.useCallback((e) => {
        e.preventDefault()
        nextRouter.push('/')
    }, [])

    return (
        <>
            <Background
                imagePath={movie.backdrop_path} />
            <Box m={2}>
                <Typography variant="h4">{movie.title}</Typography>

                <Box pt={2}>
                    <Typography variant="body1">{movie.release_date}</Typography>
                    <Rating size="small" value={movie.vote_average} max={10} readOnly />
                </Box>

                <Box pt={2}>
                    <Typography variant="body1">{movie.overview}</Typography>
                </Box>
            </Box>

            <Box my={4}>
                <Button
                    color="primary"
                    variant="contained"
                    disableElevation
                    onClick={navigateHome}>
                    <KeyboardBackspaceIcon />
                    <ButtonSpan>
                        Back home
                    </ButtonSpan>
                </Button>
            </Box>
        </>
    );
}

export const getServerSideProps : GetServerSideProps = async(
    ctx: NextPageContext
) : Promise<{props: MovieDetails}> => {
    const {
        params: { slug }
    } = ctx;
    const movie = await getMovieBySlug(slug)
    return {
        props: { movie }
    };
}

export default MovieDetails
