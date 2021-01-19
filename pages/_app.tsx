import { useEffect } from 'react';
import Head from 'next/head'
import { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../styles/material-ui/theme';

const App = (props: AppProps) : React.FC<AppProps> => {
    const { Component, pageProps } = props;

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            document.parentElement.removeChild(jssStyles);
        }
    }, [])

    return (
        <>
            <Head>
                <title>Webflix</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <StylesProvider injectFirst>
                <MuiThemeProvider theme={theme}>
                    <StyledComponentThemeProvider theme={theme}>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </StyledComponentThemeProvider>
                </MuiThemeProvider>
            </StylesProvider>
        </>
    );
}

export default App;
