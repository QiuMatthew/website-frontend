// Title.js
import { Box, Container, Stack, Typography, TextField, Button, Link, alpha } from '@mui/material';

import { useThemeContext } from '../ThemeContext.js'

export default function Title({ titleText, titleTextColored }) {
    const {mode} = useThemeContext()
    return (
        <Box
            id="title"
            sx={{
                width: '100%',
                backgroundImage:
                    mode === 'light'
                    ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                    : 'linear-gradient(#02294F, #090E10)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        component="h1"
                        variant="h2"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            color: 'text.primary',
                        }}
                    >
                        {titleText}&nbsp;
                        <Typography
                            component="span"
                            variant="h2"
                            sx={{
                                color:
                                    mode === 'light'
                                    ? 'primary.main'
                                    : 'primary.light'
                            }}
                        >
                            {titleTextColored}
                        </Typography>
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}
