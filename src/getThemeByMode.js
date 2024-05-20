// getThemeByMode.js
import { blue, grey } from '@mui/material/colors'
import { alpha } from '@mui/material'

export default function getThemeByMode(mode) {
    return {
        palette: {
            primary: {
                main: blue[700],
                light: blue[500],
                dark: blue[900],
                ...(mode === 'dark' && {
                    main: blue[300],
                    light: blue[100],
                    dark: blue[500],
                })
            },
            text: {
                primary: grey[900], secondary: grey[600],
                ...(mode === 'dark' && {
                    primary: '#ffffff', secondary: grey[400],
                })
            },
            divider: mode === 'light' ? alpha(grey[300], 0.5) : alpha(grey[600], 0.3),
        },
        components: {
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        borderRadius: '99px',
                        fontWeight: 500,
                        color: grey[500],
                        '&:hover': {
                            backgroundColor: grey[200],
                        },
                        ...(mode === 'dark' && {
                            color: grey[200],
                            '&:hover': {
                                backgroundColor: grey[800],
                            }
                        }),
                    },
                },
            },
        },
    }
}
