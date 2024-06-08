import {useThemeContext} from '../ThemeContext.js';

import { Box, Container, Typography, Grid, Card } from '@mui/material'

import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function Applications() {
    const {mode} = useThemeContext()
    const items = [
        {
            icon: <ViewQuiltRoundedIcon />,
            title: 'Easy Slide',
            description: 'Efficiently create slides with markdown grammar.',
            imageLight: '#FFF',
            imageDark: '#000',
            link: '/apps/easy-slide',
        },
        {
            icon: <EdgesensorHighRoundedIcon />,
            title: 'Discrete Logarithm Calculator',
            description: 'Time for some cryptology?',
            imageLight: '#FFF',
            imageDark: '#000',
            link: '/apps/discrete-log',
        },
        {
            icon: <DevicesRoundedIcon />,
            title: 'Chouseisan Scheduler',
            description: 'Schedule parties and events smartly and easily.',
            imageLight: '#FFF',
            imageDark: '#000',
            link: '/apps/chouseisan',
        },
    ];

    return (
        <Box
            id="applications"
            sx={{
                width: '100%',
                backgroundColor:
                    mode === 'light'
                    ? '#FFFFFF'
                    : '#06090a',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 4, sm: 12 },
                    pb: { xs: 8, sm: 16 },
                    // space between child items
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box 
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography variant='h4' sx={{color: 'text.primary'}}>
                        Application List
                    </Typography>
                    <Typography variant='body1' sx={{color: 'text.secondary'}}>
                        Here are some applications I built. You can use them for free!
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                {
                    items.map(
                        (item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        // evenly distribute blank spaces to each card
                                        flexGrow: 1,
                                        p: 3,
                                    }}
                                >
                                    <Box sx={{ opacity: '50%', pb: 1 }}>
                                        {item.icon}
                                    </Box>
                                    <Typography gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                </Card>
                            </Grid>
                        )
                    )
                }
                </Grid>
            </Container>
        </Box>
    )
}
