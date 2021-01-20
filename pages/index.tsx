import Head from 'next/head'
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    background: ${props => props.bg};
    &:hover {
        background: darkred;

    }
`

const Home = () => (
    <>
    <div className="container">
        <Head>
            <title>Webflix</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
        </Head>

        <div> This is the home page</div>

    </div>
    </>
)

export default Home
