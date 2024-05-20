import { blue, grey } from '@mui/material/colors'
import { alpha } from '@mui/material'

export default function getThemeByMode(mode) {
    return {
        palette: {
            mode,
            primary: {
                main: blue[700],
                ...(mode === 'dark' && {
                    main: blue[200],
                })
            },
            secondary: {
                main: '#dc004e',
            },
            divider: mode === 'dark' ? alpha(grey[600], 0.3) : alpha(grey[300], 0.5),
            text: {
                primary: grey[900], secondary: grey[600],
                ...(mode === 'dark' && {
                    primary: '#ffffff', secondary: grey[400],
                })
            },
            background: {
                default: mode === 'dark' ? '#090E10' : '#ffffff'
            },
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            boxSizing: 'border-box',
                            border: '1px solid',
                            borderColor: grey[50],
                            '&.Mui-focused': {
                                borderColor: '#ffffff',
                            }
                        },
                        ...mode === 'dark' && {
                            '& .MuiOutlinedInput-root': {
                                boxSizing: 'border-box',
                                border: '1px solid',
                                borderColor: grey[700],
                                '&.Mui-focused': {
                                    borderColor: '#090E10',
                                }
                            }
                        }
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                root: ({ theme, ownerState }) => ({
                    backgroundColor: grey[50],
                    borderRadius: 10,
                    border: `1px solid ${alpha(grey[200], 0.8)}`,
                    boxShadow: 'none',
                    transition: 'background-color, border, 80ms ease',
                    ...(ownerState.variant === 'outlined' && {
                    background: `linear-gradient(to bottom, #FFF, ${grey[50]})`,
                    '&:hover': {
                        borderColor: blue[300],
                        boxShadow: `0 0 24px ${blue[100]}`,
                    },
                    }),
                    ...(theme.palette.mode === 'dark' && {
                    backgroundColor: alpha(grey[800], 0.6),
                    border: `1px solid ${alpha(grey[700], 0.3)}`,
                    ...(ownerState.variant === 'outlined' && {
                        background: `linear-gradient(to bottom, ${grey[900]}, ${alpha(
                        grey[800],
                        0.5,
                        )})`,
                        '&:hover': {
                        borderColor: blue[700],
                        boxShadow: `0 0 24px ${blue[800]}`,
                        },
                    }),
                    }),
                }),
                },
            },
        }
    }
}
