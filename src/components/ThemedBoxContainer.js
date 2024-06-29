import { Box, Container } from "@mui/material"
import { useThemeContext } from "../ThemeContext"

export default function ThemedBoxContainer({ children }) {
    const { mode } = useThemeContext()
    return (
        <Box
            sx={{
                width: '100%',
                backgroundImage:
                    mode == 'light'
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
                }}
            >
                {children}
            </Container>
        </Box>
    )
}
