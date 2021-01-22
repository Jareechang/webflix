import { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components"
import CssBaseline from '@material-ui/core/CssBaseline'

import { Layout } from '../components/layout'

import theme from '../styles/material-ui/theme'

const App : React.FC<AppProps> = (props: AppProps) => {
    const { Component, pageProps, router } = props

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            if (jssStyles.parentElement) {
                jssStyles.parentElement.removeChild(jssStyles)
            }
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
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </StyledComponentThemeProvider>
                </MuiThemeProvider>
            </StylesProvider>
        </>
    )
}

export default App
