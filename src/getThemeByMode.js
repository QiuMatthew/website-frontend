// getThemeByMode.js
import { blue } from '@mui/material/colors'

export default function getThemeByMode(mode) {
    return {
        palette: {
            primary: {
                main: blue[700],
                ...(mode === 'dark' && {
                    main: blue[200],
                })
            },
        },
    }
}
