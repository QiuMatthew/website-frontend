import { Box, Container, Typography } from '@mui/material'
import { useThemeContext } from '../ThemeContext.js'

export default function Subtitle({ contentList }) {
    const { mode } = useThemeContext()
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor:
                    mode === 'light'
                        ? '#FFF'
                        : '#090E10',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {
                    contentList.map(
                        (line) => (
                            <Typography variant='body1' color='text.secondary'>
                                {line}
                            </Typography>
                        )
                    )
                }
            </Container>
        </Box>
    )
}
