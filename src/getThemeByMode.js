// getThemeByMode.js
import { blue, grey } from '@mui/material/colors'
import { alpha } from '@mui/material'

export const brand = {
    50: '#F0F7FF',
    100: '#CEE5FD',
    200: '#9CCCFC',
    300: '#55A6F6',
    400: '#0A66C2',
    500: '#0959AA',
    600: '#064079',
    700: '#033363',
    800: '#02294F',
    900: '#021F3B',
};

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
            action: {
                selected: `${alpha(brand[200], 0.2)}`,
                ...(mode === 'dark' && {
                    selected: `${alpha(brand[800], 0.2)}`,
                }),
            },
            text: {
                primary: grey[900], secondary: grey[600],
                ...(mode === 'dark' && {
                    primary: '#ffffff', secondary: grey[400],
                })
            },
            divider: mode === 'light' ? alpha(grey[300], 0.5) : alpha(grey[600], 0.3),
            gray: {
                50: gray[50],
                100: gray[100],
                200: gray[200],
                300: gray[300],
                400: gray[400],
                500: gray[500],
                600: gray[600],
                700: gray[700],
                800: gray[800],
                900: gray[900],
            },
            brand: {
                50: brand[50],
                100: brand[100],
                200: brand[200],
                300: brand[300],
                400: brand[400],
                500: brand[500],
                600: brand[600],
                700: brand[700],
                800: brand[800],
                900: brand[900],
            },
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
                            borderColor: gray[700],
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
