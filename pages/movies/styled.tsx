import {
    Grid as MuiGrid,
    Box as MuiBox
} from '@material-ui/core'

import styled from 'styled-components'

export const GridItem = styled(
    ({ maxHeight, ...restProps  }) => <MuiGrid {...restProps} />
)`
    max-height: ${props => props.maxHeight}px;

    ${props => props.theme.breakpoints.down('sm')} {
        margin-bottom: -${props => props.theme.spacing(10)}px;
        max-height: 100%;
        height: auto;
    }

`
