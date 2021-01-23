import React from 'react'
import { useRouter } from 'next/router'

import {
    Box,
    Button
} from '@material-ui/core'

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { ButtonSpan } from './movies/details/styled'

interface HomeButtonProps {
}

const HomeButton: React.FC<HomeButtonProps> = (
    props: HomeButtonProps
) => {
    const nextRouter = useRouter()
    const navigateHome = React.useCallback((e) => {
        e.preventDefault()
        nextRouter.push('/')
    }, [])

    return (
        <Box pt={2}>
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
    )
}

export default HomeButton
