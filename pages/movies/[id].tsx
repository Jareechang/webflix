import {
    GetServerSideProps,
    NextPageContext
} from 'next'

import {
    getMovie
} from '../../lib/api/movies'

export interface MovieDetails {

}

const MovieDetails : React.FC<MovieDetails> = (
    props: MovieDetails
) => {
    console.log(props.movie)
    return (
        <div>Movie details </div>
    );
}

export const getServerSideProps : GetServerSideProps = async(
    ctx: NextPageContext
) : Promise<{props: MovieDetails}> => {
    const {
        params: { id }
    } = ctx;
    const movie = await getMovie(+id)
    return {
        props: { movie }
    };
}

export default MovieDetails
