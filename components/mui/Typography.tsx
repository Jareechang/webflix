import {
    Typography as MuiTypography
} from '@material-ui/core'


import styled from 'styled-components'


interface TypographyProps {
    uppercase?: boolean;
    bold?: boolean;
}

const StyledTypography = styled(({
    uppercase,
    bold,
    ...restProps
}) => <MuiTypography {...restProps} />)`
    text-transform: ${props => props.uppercase ? 'uppercase' : 'unset'};
    font-weight: ${props => props.bold ? 'bold' : 'unset'};
`

const Typography : React.FC<TypographyProps> = (
    props: TypographyProps
) => {
    return (
        <StyledTypography {...props} />
    )
}

export default Typography
