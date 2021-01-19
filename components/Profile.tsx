import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

import styled from 'styled-components'

import {
    alignCenter
} from '../styles/utils'

const StyledIconButton = styled(IconButton)`
    ${alignCenter}
`

export interface ProfileProps {
    loggedIn?: boolean;
}

const Profile : React.FC<ProfileProps> = (props: ProfileProps) => {
    return props.loggedIn ? (
        <StyledIconButton>
            <AccountCircle />
        </StyledIconButton>
    ) : null;
}

export default Profile;
