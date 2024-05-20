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
            divider: mode === 'light' ? alpha(grey[300], 0.5) : alpha(grey[600], 0.3),
        },
    }
}
