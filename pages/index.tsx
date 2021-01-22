import {
    NextPageContext
} from 'next'
import axios from 'axios'
import Head from 'next/head'
import styled from 'styled-components'

import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/core/styles';

import {
    Button,
    Box,
    Typography
} from '@material-ui/core'
import { MovieList } from '../components/movies'

interface HomeProps {
    latestMovies: any;
}

const Home = (props: HomeProps) => {
    return (
        <>
            <div className="container">
                <Head>
                    <title>Webflix</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
                </Head>
                <MovieList
                    sectionTitle="Latest Releases"
                    sectionDescription=""
                    movies={props.latestMovies} />
            </div>
        </>

    )
}

Home.getInitialProps = async(
    ctx: NextPageContext
) => {
    const {
        data: { results }
    } = await axios.get('http://localhost:3000/api/movies')
    return { latestMovies: results }
}

export default Home
