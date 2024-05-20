// ToggleModeButton.js
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

import { useThemeContext } from './ThemeContext.js'

function ToggleModeButton() {
    const { mode, toggleMode } = useThemeContext()

    return (
        <Box sx={{ maxWidth: '32px' }}>
        <Button
            variant="text"
            onClick={toggleMode}
            size="small"
            aria-label="button to toggle theme"
            sx={{ minWidth: '32px', height: '32px', p: '4px' }}
        >
            {
                mode === 'dark' 
                ? <WbSunnyRoundedIcon fontSize="small" />
                : <ModeNightRoundedIcon fontSize="small" />
            }
        </Button>
    </Box>
    )
}

export default ToggleModeButton;
