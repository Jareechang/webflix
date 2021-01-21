import styled from 'styled-components'

export const Img = styled.img`
    width: 100%;
    margin: auto;
    padding: ${props => props.theme.spacing(5)}px 0;
    display: flex;
    ${props => props.theme.breakpoints.down('xs')} {
        height: auto;
        width: 100%;
    }
`

export const ButtonSpan = styled.span`
    padding-left: 1em;
`
