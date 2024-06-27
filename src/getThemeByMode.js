// getThemeByMode.js
import { blue, grey } from '@mui/material/colors'
import { alpha } from '@mui/material'

export const gray = {   // this is grey but with more blue ingredient
    50: '#FBFCFE',
    100: '#EAF0F5',
    200: '#D6E2EB',
    300: '#BFCCD9',
    400: '#94A6B8',
    500: '#5B6B7C',
    600: '#4C5967',
    700: '#364049',
    800: '#131B20',
    900: '#090E10',
};

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
            background: {
                primary: '#ffffff',
                secondary: '#ffffff',
                ...(mode === 'dark' && {
                    primary: '#090e10',
                    secondary: '#06090a',
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
                        color: gray[500],
                        '&:hover': {
                            backgroundColor: gray[200],
                        },
                        ...(mode === 'dark' && {
                            color: gray[200],
                            '&:hover': {
                                backgroundColor: gray[800],
                            }
                        }),
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor: `${alpha(gray[200], 0.8)}`,
                        ...(mode === 'dark' && {
                            borderColor: '#364049',
                        }),
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor:
                            mode === 'light'
                                ? gray[50]
                                : gray[900],
                        borderRadius: 10,
                        border:
                            mode === 'light'
                                ? `1px solid ${alpha(gray[200], 0.8)}`
                                : `1px solid ${alpha(gray[700], 0.3)}`,
                        boxShadow: 'none',
                    }
                }
            }
        },
    }
}
