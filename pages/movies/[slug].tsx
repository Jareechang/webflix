import React,{
    useRef
} from 'react'
import {
    GetServerSideProps,
    NextPageContext
} from 'next'

import {
    Grid,
    Divider,
    Box
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import Typography from '../../components/mui/Typography.tsx'
import Background from '../../components/movies/details/Background'
import VideoItem from '../../components/video/VideoItem'

import * as Styled from '../../components/movies/styled';

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
                thumbnails: {
                    high
                }
            }
        } = trailer
        const ref = useRef(null);
        if (ref && ref.current) {
            console.log(ref.current);
        }
        return (
            <Styled.GridItem
                item
                md={3}
                sm={12}
                key={videoId}
                maxHeight={255}>
                <VideoItem
                    ref={ref}
                    videoId={videoId}
                    height={245}
                    thumbnail={high.url}
                />
            </Styled.GridItem>
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
            <Box mt={3}>
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
    console.log(trailers)
    return {
        props: { movie, trailers }
    };
}

export default MovieDetails
