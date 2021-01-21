import {
    Typography as MuiTypography
} from '@material-ui/core'


import styled from 'styled-components'


interface TypographyProps {
    uppercase?: boolean;
    bold?: boolean;
    display?: string;
}

const StyledTypography = styled(({
    uppercase,
    bold,
    display,
    ...restProps
}) => <MuiTypography {...restProps} />)`
    text-transform: ${props => props.uppercase ? 'uppercase' : 'unset'};
    font-weight: ${props => props.bold ? 'bold' : 'unset'};
    display: ${props => props.display || 'block'};
`

const Typography : React.FC<TypographyProps> = (
    props: TypographyProps
) => {
    return (
        <StyledTypography {...props} />
    )
}

export default Typography
