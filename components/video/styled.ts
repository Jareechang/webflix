import MuiPlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

import styled from 'styled-components';

export const PlayCircleFilledIcon = styled(MuiPlayCircleFilledIcon)`
    position: relative;
    top: -40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4.5em;
`

export const Thumbnail = styled.img`
    display: inline-block;
    max-width: 100%;
    width: auto;
    height: ${props => props.height}px;
`
