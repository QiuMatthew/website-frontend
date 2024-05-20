import { Box, Container, alpha } from '@mui/material'

import { useThemeContext } from '../ThemeContext.js'

export default function Hero({ image }) {
    const {mode} = useThemeContext()
    return (
        <Box
            id="hero"
            sx={{
                width: '100%',
                backgroundImage:
                    mode === 'light'
                    ? 'linear-gradient(180deg, #FFF, #FFF)'
                    : 'linear-gradient(#090E10, #090E10)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Box
                    id="image"
                    sx={{
                        mt: { xs: 8, sm: 10 },
                        alignSelf: 'center',
                        height: { xs: 200, sm: 700 },
                        width: '100%',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor: alpha('#9CCCFC', 0.1),
                        boxShadow: `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    }}
                />
            </Container>
        </Box>
    )
}

