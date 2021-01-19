import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

import Search from './Search'
import Profile from './Profile'

export interface NavProps {
}

const StyledAppBar = styled(AppBar)`
    background-color: ${props => props.theme.palette.primary.main};
    flex-grow: 1;
`

const StyledToolbar = styled(Toolbar)`
    min-height: 55px;
`

const Title = styled(Typography)`
    text-transform: uppercase;
`

const Nav : React.FC<NavProps> = (props: NavProps) => {
    return (
        <StyledAppBar elevation={0}>
            <Box px={3}>
                <StyledToolbar>
                    <Title variant="h6">Webflix</Title>
                    <Search />
                    <Profile />
                </StyledToolbar>
            </Box>
        </StyledAppBar>
    )
}

export default Nav
