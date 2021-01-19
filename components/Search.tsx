import {
    useState,
    useCallback
} from 'react'
import InputBase from '@material-ui/core/InputBase'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Zoom from '@material-ui/core/Zoom'
import AccountCircle from '@material-ui/icons/AccountCircle'
import CircularProgress from '@material-ui/core/CircularProgress'

import styled from 'styled-components'

import {
    alignCenter
} from '../styles/utils'

const SearchContainer = styled.div`
    margin: 0 0 0 auto;
    display: flex;
`

const SearchIconDiv = styled.div`
    ${alignCenter}
    padding: ${props => props.theme.spacing(0, 2)};
`

const StyledInput = styled(InputBase)`
    width: 275px;
    padding: ${props => props.theme.spacing(1, 0)};
`

export interface SearchProps {}

const Search : React.FC<SearchProps> = (props: SearchProps) => {
    const [showSearch, setShowSearch] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);

    const handleShowSearch = () => {
        setShowSearch(!showSearch);
    }

    const handleCloseSearch = () => {
        setShowSearch(false);
        setLoadingSearch(false);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setLoadingSearch(true);

            setTimeout(() => {
                setLoadingSearch(false);
            }, 1500);
        }
    }

    const renderInputEndAdornment = useCallback(() => {
        return (
            <InputAdornment position="end">
                {loadingSearch ? (
                    <IconButton>
                        <CircularProgress
                            size={20}
                            color="textPrimary"
                        />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleCloseSearch}>
                        <CloseIcon />
                    </IconButton>
                )}
            </InputAdornment>
        );
    }, [loadingSearch]);

    return (
        <SearchContainer>
            <SearchIconDiv>
                <IconButton onClick={handleShowSearch}>
                    <SearchIcon />
                </IconButton>
            </SearchIconDiv>
            <Zoom
                in={showSearch}
                unmountOnExit={true}>
                <StyledInput
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyDown={handleKeyDown}
                    endAdornment={renderInputEndAdornment()}
                />
            </Zoom>
        </SearchContainer>
    )
}


export default Search;
