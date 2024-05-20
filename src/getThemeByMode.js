// getThemeByMode.js
import { blue, grey } from '@mui/material/colors'
import { alpha } from '@mui/material'

export default function getThemeByMode(mode) {
    return {
        palette: {
            primary: {
                main: blue[700],
                ...(mode === 'dark' && {
                    main: blue[200],
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
    }
}
