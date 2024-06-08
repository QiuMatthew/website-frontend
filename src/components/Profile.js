import {useThemeContext} from '../ThemeContext.js';

import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material'

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

export default function Profile() {
    const {mode} = useThemeContext()
    const items = [
        {
            icon: <SettingsSuggestRoundedIcon />,
            title: 'Education',
            description:
                'Studied cyber security at USTC and now majoring in information engineering at UTokyo as a master student.',
        },
        {
            icon: <ConstructionRoundedIcon />,
            title: 'Tech interests',
            description:
                'Cyber security, crypto assets, backend development, machine learning, fintech, etc.',
        },
        {
            icon: <QueryStatsRoundedIcon />,
            title: 'Part-time',
            description:
                'Teach Probability & Statistics, Information Theory, Digital Circuit to undergraduates.',
        },
        {
            icon: <SupportAgentRoundedIcon />,
            title: 'Interests',
            description:
                'Finance, Law (preparing for BAR exam), Math.',
        },
        {
            icon: <ThumbUpAltRoundedIcon />,
            title: 'Hobbies',
            description:
                'Calligraphy(penmanship), harmonica, baseball, boxing.',
        },
        {
            icon: <AutoFixHighRoundedIcon />,
            title: 'Video games',
            description:
                'Mainly plays StarCraft II, also plays Final Fantasy XIV.',
        },
    ];

    return (
        <Box
            id="profile"
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
                        Profile
                    </Typography>
                    <Typography variant='body1' sx={{color: 'text.secondary'}}>
                        Who am I? <br />
                        24601!
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                {
                    items.map(
                        (item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
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
