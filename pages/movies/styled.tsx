import {
    Grid as MuiGrid,
    Box as MuiBox
} from '@material-ui/core'

import styled from 'styled-components'

export const Box = styled(
    ({ maxHeight, ...restProps  }) => <MuiBox {...restProps} />
)`
    max-height: ${props => props.maxHeight}px;
`

export const GridContainer = styled(
    ({ maxHeight, ...restProps  }) => <MuiGrid {...restProps} />
)`
    max-height: ${props => props.maxHeight}px;
`


export const GridItem = styled(
    ({ maxHeight, ...restProps  }) => <MuiGrid {...restProps} />
)`
    max-height: ${props => props.maxHeight}px;
`
