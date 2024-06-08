import {useThemeContext} from '../ThemeContext.js';

import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material'

import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';

export default function About() {
    const {mode} = useThemeContext()
    const items = [
        {
            icon: <PersonRoundedIcon />,
            title: 'Who am I',
            description:
                '24601!',
        },
        {
            icon: <AppsRoundedIcon />,
            title: 'Applications',
            description:
                'Get some easy-to-use tools on this website.',
        },
        {
            icon: <RssFeedRoundedIcon />,
            title: 'My Blog',
            description:
                'A bad pencil is better than a good memory.',
        },
        {
            icon: <ExploreRoundedIcon />,
            title: 'More',
            description:
                'Explore the unseen, experience the unknown.',
        }
    ];

    return (
        <Box
            id="hero"
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
                        About
                    </Typography>
                    <Typography variant='body1' sx={{color: 'text.secondary'}}>
                        Here is what you can find on this site.
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
