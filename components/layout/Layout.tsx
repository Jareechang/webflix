import React from 'react'
import styled from 'styled-components'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import HomeButton from '../HomeButton'

import {
    Button,
    Box
} from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { ButtonSpan } from '../movies/details/styled'
import Nav from '../Nav'


const Container = styled.div`
    margin: ${props => props.theme.spacing(6, 6, 0, 6)};
`

const ButtonContainer = styled.div`
    margin: ${props => props.theme.spacing(6, 6)};
`

export interface LayoutProps {
    children?: React.ReactNode;
    isHome: boolean;
}

const Layout : React.FC<LayoutProps> = (
    props: LayoutProps
) => {
    const {
        isHome,
        children,
    } = props

    return (
        <>
            <Nav />
            <Container>
                {children}
            </Container>
            <ButtonContainer>
                {!isHome ? <HomeButton /> : null}
            </ButtonContainer>
        </>
    )
}

export default Layout
