import {
    NextPageContext
} from 'next'
import axios from 'axios'
import Head from 'next/head'

import {
    Box,
    Typography
} from '@material-ui/core'

import styled from 'styled-components'

import { MovieList } from '../components/movies'


const movies = [{
    title: 'Movie Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lacinia turpis. Donec et malesuada lectus. Duis elementum elit vitae rutrum consequat. Aenean pulvinar posuere dapibus. Proin nec lacus sit amet tortor ullamcorper faucibus. Nam faucibus a erat vel tempor. Fusce nec enim ex. Nullam dui orci, suscipit sed blandit ac, tristique in est. Maecenas finibus tellus lorem, id molestie ante iaculis interdum.',
    imageUrl: '/images/mock-image.jpg'
},
    {

    title: 'Movie Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lacinia turpis. Donec et malesuada lectus. Duis elementum elit vitae rutrum consequat. Aenean pulvinar posuere dapibus. Proin nec lacus sit amet tortor ullamcorper faucibus. Nam faucibus a erat vel tempor. Fusce nec enim ex. Nullam dui orci, suscipit sed blandit ac, tristique in est. Maecenas finibus tellus lorem, id molestie ante iaculis interdum.',
    imageUrl: '/images/mock-image.jpg'
    },
    {

    title: 'Movie Title 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lacinia turpis. Donec et malesuada lectus. Duis elementum elit vitae rutrum consequat. Aenean pulvinar posuere dapibus. Proin nec lacus sit amet tortor ullamcorper faucibus. Nam faucibus a erat vel tempor. Fusce nec enim ex. Nullam dui orci, suscipit sed blandit ac, tristique in est. Maecenas finibus tellus lorem, id molestie ante iaculis interdum.',
    imageUrl: '/images/mock-image.jpg'
    },
    {

    title: 'Movie Title 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lacinia turpis. Donec et malesuada lectus. Duis elementum elit vitae rutrum consequat. Aenean pulvinar posuere dapibus. Proin nec lacus sit amet tortor ullamcorper faucibus. Nam faucibus a erat vel tempor. Fusce nec enim ex. Nullam dui orci, suscipit sed blandit ac, tristique in est. Maecenas finibus tellus lorem, id molestie ante iaculis interdum.',
    imageUrl: '/images/mock-image.jpg'
    },
    {

    title: 'Movie Title 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lacinia turpis. Donec et malesuada lectus. Duis elementum elit vitae rutrum consequat. Aenean pulvinar posuere dapibus. Proin nec lacus sit amet tortor ullamcorper faucibus. Nam faucibus a erat vel tempor. Fusce nec enim ex. Nullam dui orci, suscipit sed blandit ac, tristique in est. Maecenas finibus tellus lorem, id molestie ante iaculis interdum.',
    imageUrl: '/images/mock-image.jpg'
    }
]

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
    const { data: { results } } = await axios.get('http://localhost:3000/api/movies')
    return { latestMovies: results }
}



export default Home
