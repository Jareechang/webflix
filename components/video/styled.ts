import MuiPlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import MuiIconButton from '@material-ui/core/IconButton'

import styled from 'styled-components';

const centerPositioning = `
    position: relative;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const PlayCircleFilledIcon = styled(MuiPlayCircleFilledIcon)`
    font-size: 3em;
`

export const IconButton = styled(MuiIconButton)`
    ${centerPositioning}
    ${props => props.theme.breakpoints.down('sm')} {
        top: -40%;
    }
`

export const Thumbnail = styled.img`
    display: inline-block;
    max-width: 100%;
    width: auto;
    ${props => props.theme.breakpoints.down('sm')} {
        width: 100%;
        height: auto;
    }

`
