import {
    forwardRef
} from 'react'

import {
    Grid as MuiGrid,
    Card as MuiCard,
    CardContent as MuiCardContent,
    CardMedia as MuiCardMedia,
    Typography as MuiTypography,
} from '@material-ui/core'

import Skeleton from '@material-ui/lab/Skeleton';

import styled from 'styled-components'

export const CardContent = styled(MuiCardContent)`
    background-color: ${props => props.theme.palette.secondary.main};
`

export const Card = styled(MuiCard)`
    width: 300px;
    background-color: ${props => props.theme.palette.secondary.main};
`

/*
 *
 * Add work-around to pass ref as styled-components does not handle this
 *
 * **/
export const CardMediaWrapper = styled(
    ({
        xRef,
        imageLoaded,
        ...restProps
    }) =>  {
        return (
            <MuiCardMedia
                ref={xRef}
                {...restProps}
            />
        );
    }
)`
    width: auto;
    height: 250px;
    visibility: ${props => props.imageLoaded ? 'visible' : 'hidden'};
`

// Add forward Ref
export const CardMedia = forwardRef((props, ref) => {
    return (
        <CardMediaWrapper
            {...props}
            xRef={ref}
        />
    )
})

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
