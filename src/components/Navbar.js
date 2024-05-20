import { Link } from 'react-router-dom'
import { AppBar, Container, Toolbar, Box, IconButton, MenuItem, Typography, Button } from '@mui/material'

import ToggleModeButton from '../ToggleModeButton.js'
import { useThemeContext } from '../ThemeContext.js'
import Logo from '../logo.svg';

export default function Navbar({ navbarItems }) {
    const { mode, toggleMode } = useThemeContext()
    const scrollToSection = (sectionID) => {
        const sectionElement = document.getElementById(sectionID);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll, 
                behavior: 'smooth',
            });
        }
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 2,
            }}
        >
            <Container maxWidth='lg'>
                <Toolbar
                    variant='regular'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexShrink: 0,
                        borderRadius: '999px',
                        bgcolor:
                            mode === 'light'
                            ? 'rgba(255, 255, 255, 0.4)'
                            : 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(24px)',
                        maxHeight: 40,
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow:
                            mode === 'light'
                            ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                            : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)'
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            ml: '-18px',
                            px: 0,
                        }}
                    >
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            &nbsp;&nbsp;
                            <IconButton>
                                <img src={Logo} style={{
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                }} />
                            </IconButton>
                        </Link>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {navbarItems.map((item, index) => (
                                <MenuItem
                                    onClick={() => scrollToSection(item.sectionID)}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant='body2' color='text.primary'>
                                        {item.text}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 0.5,
                            alignItems: 'center',
                        }}
                    >
                        <ToggleModeButton />
                        <Button
                            color="primary"
                            variant="text"
                            size="small"
                            component="a"
                            href="/material-ui/getting-started/templates/sign-in/"
                            target="_blank"
                        >
                            Sign in
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            component="a"
                            href="/material-ui/getting-started/templates/sign-up/"
                            target="_blank"
                        >
                            Sign up
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
