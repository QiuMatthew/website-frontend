import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

import { useThemeContext } from '../ThemeContext.js'

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://google.com/">Q&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    const { mode } = useThemeContext()
    return (
        <Box
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
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    textAlign: { sm: 'center', md: 'left' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            minWidth: { xs: '100%', sm: '60%' },
                        }}
                    >
                        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                            <Box sx={{ ml: '-15px' }}>
                                <img
                                    src={
                                        'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                                    }
                                    style={logoStyle}
                                    alt="logo of sitemark"
                                />
                            </Box>
                            <Typography variant="body2" color="text.primary" fontWeight={600} gutterBottom>
                                Subscription
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={2}>
                                Subscribe for updates and promotions.
                            </Typography>
                            <Stack direction="row" spacing={1} useFlexGap>
                                <TextField
                                    id="outlined-basic"
                                    hiddenLabel
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    aria-label="Enter your email address"
                                    placeholder="Your email address"
                                    inputProps={{
                                        autocomplete: 'off',
                                        ariaLabel: 'Enter your email address',
                                    }}
                                />
                                <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                                    Subscribe
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" color="text.primary" fontWeight={600}>
                            Applications
                        </Typography>
                        <Link color="text.secondary" href="/apps/easy-slide">
                            Easy Slide
                        </Link>
                        <Link color="text.secondary" href="/apps/discrete-log">
                            Discrete Log Calculator
                        </Link>
                        <Link color="text.secondary" href="/apps/chouseisan">
                            Chouseisan Scheduler
                        </Link>
                        <Link color="text.secondary" href="#">
                            FAQs
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" color="text.primary" fontWeight={600}>
                            Blog
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Tech
                        </Link>
                        <Link color="text.secondary" href="#">
                            Law
                        </Link>
                        <Link color="text.secondary" href="#">
                            Cooking
                        </Link>
                        <Link color="text.secondary" href="#">
                            Travel
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" color="text.primary" fontWeight={600}>
                            About
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Contact
                        </Link>
                        <Link color="text.secondary" href="#">
                            Privacy Policy
                        </Link>
                        <Link color="text.secondary" href="#">
                            Terms of Service
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: { xs: 4, sm: 8 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <div>
                        <Link color="text.secondary" href="#">
                            Privacy Policy
                        </Link>
                        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Terms of Service
                        </Link>
                        <Copyright />
                    </div>
                    <Stack
                        direction="row"
                        justifyContent="left"
                        spacing={1}
                        useFlexGap
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            href="https://github.com/"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://twitter.com/"
                            aria-label="X"
                            sx={{ alignSelf: 'center' }}
                        >
                            <TwitterIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/"
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

