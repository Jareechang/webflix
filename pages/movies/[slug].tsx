import React from 'react'
import {
    GetServerSideProps,
    NextPageContext
} from 'next'

import {
    Grid,
    Divider,
    Box
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import Typography from '../../components/mui/Typography.tsx'
import Background from '../../components/movies/details/Background'

import {
    getMovieBySlug,
    searchVideo
} from '../../lib/api'

export interface MovieDetails {
    movie: any;
    trailers: any;
}

const MovieDetails : React.FC<MovieDetails> = (
    props: MovieDetails
) => {
    const { movie, trailers } = props

    const renderTrailer = React.useCallback((trailer) => {
        const {
            id: {
                videoId
            },
            snippet: {
                title
            }
        } = trailer
        return (
            <Grid item md={3} xs={12} key={videoId}>
                <iframe
                    allowFullScreen
                    scrolling="auto"
                    style={{ border: 0 }}
                    src={`http://youtube.com/embed/${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                />
                <Typography variant="body1">{title}</Typography>
            </Grid>
        )
    }, [])

    return (
        <>
            <Background
                imagePath={movie.backdrop_path} />

            <Typography variant="h6">Details</Typography>
            <Divider />

            <Box my={3}>
                <Typography variant="h4">{movie.title}</Typography>

                <Box pt={2}>
                    <Typography variant="body1">{movie.release_date}</Typography>
                    <Rating size="small" value={movie.vote_average} max={10} readOnly />
                </Box>

                <Box pt={2}>
                    <Typography variant="body1">{movie.overview}</Typography>
                </Box>
            </Box>

            <Typography variant="h6">Trailers</Typography>
            <Divider />

            <Box my={3}>
                <Grid container spacing={2}>
                    {
                        trailers.map(
                            trailer => renderTrailer(trailer)
                        )
                    }
                </Grid>
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
    const trailers = (await searchVideo('some-query'))
    return {
        props: { movie, trailers }
    };
}

export default MovieDetails
