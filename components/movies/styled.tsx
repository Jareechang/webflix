
import {
    Grid as MuiGrid,
    Card as MuiCard,
    CardContent as MuiCardContent,
    CardMedia as MuiCardMedia,
    Typography as MuiTypography,
} from '@material-ui/core'

import styled from 'styled-components'

export const CardContent = styled(MuiCardContent)`
    background-color: ${props => props.theme.palette.secondary.main};
`

export const Card = styled(MuiCard)`
    width: 300px;
    background-color: ${props => props.theme.palette.secondary.main};
`

export const CardMedia = styled(MuiCardMedia)`
    width: auto;
    height: 250px;
`

export const Typography = styled(MuiTypography)`
    text-transform: uppercase; 
`

export const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-y: scroll;
    width: 92.5vw;
    &::-webkit-scrollbar {
        width: 0;
    }
`
