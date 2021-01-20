import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Raleway, sans-serif'
    },
    palette: {
        primary: {
            main: '#fffd71',
        },
        secondary: {
            main: '#f2f2f2',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
