import React from 'react';
import { useThemeContext } from '../ThemeContext.js';

import { Box, Container, Typography, Grid, Card, Chip, Link, Stack, Button } from '@mui/material'

import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function Applications() {
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

    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    const { mode } = useThemeContext()

    return (
        <Box
            id="applications"
            sx={{
                width: '100%',
                backgroundColor:
                    mode === 'light'
                        ? '#FFFFFF'
                        : '#090E10',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container  // wrap content, used to make sure vertical alignment
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
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box    // title
                            sx={{
                                textAlign: { sm: 'left', md: 'center' },
                                pb: { sm: 3, md: 6 },
                            }}
                        >
                            <Typography variant='h4' sx={{ color: 'text.primary' }}>
                                Application List
                            </Typography>
                            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                                Here are some applications I built. You can use them for free!
                            </Typography>
                        </Box>

                        <Grid   // when window is extra small, show the buttons
                            container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}
                        >
                            {items.map(({ title }, index) => (
                                <Chip
                                    key={index}
                                    label={title}
                                    onClick={() => handleItemClick(index)}
                                    sx={{
                                        borderColor: (theme) => {
                                            if (theme.palette.mode === 'light') {
                                                return selectedItemIndex === index ? 'primary.light' : '';
                                            }
                                            return selectedItemIndex === index ? 'primary.light' : '';
                                        },
                                        background: (theme) => {
                                            if (theme.palette.mode === 'light') {
                                                return selectedItemIndex === index ? 'none' : '';
                                            }
                                            return selectedItemIndex === index ? 'none' : '';
                                        },
                                        backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                                        '& .MuiChip-label': {
                                            color: selectedItemIndex === index ? '#fff' : '',
                                        },
                                    }}
                                />
                            ))}
                        </Grid>
                        <Box    // when window is extra small, show the display
                            component={Card}
                            variant="outlined"
                            sx={{
                                display: { xs: 'auto', sm: 'none' },
                                mt: 4,
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? items[selectedItemIndex].imageLight
                                            : items[selectedItemIndex].imageDark,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: 280,
                                }}
                            />
                            <Box sx={{ px: 2, pb: 2 }}>
                                <Typography color="text.primary" variant="body2" fontWeight="bold">
                                    {selectedFeature.title}
                                </Typography>
                                <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                                    {selectedFeature.description}
                                </Typography>
                                <Link
                                    color="primary"
                                    variant="body2"
                                    fontWeight="bold"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        '& > svg': { transition: '0.2s' },
                                        '&:hover > svg': { transform: 'translateX(2px)' },
                                    }}
                                >
                                    <span>Learn more</span>
                                    <ChevronRightRoundedIcon
                                        fontSize="small"
                                        sx={{ mt: '1px', ml: '2px' }}
                                    />
                                </Link>
                            </Box>
                        </Box>
                        <Stack  // when window is larger than small, show the app list stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={2}
                            useFlexGap
                            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
                        >
                            {items.map(({ icon, title, description, link }, index) => (
                                <Card
                                    key={index}
                                    component={Button}
                                    onClick={() => handleItemClick(index)}
                                    sx={{
                                        p: 3,
                                        height: 'fit-content',
                                        width: '100%',
                                        background: 'none',
                                        backgroundColor:
                                            selectedItemIndex === index ? 'action.selected' : undefined,
                                        borderColor: (theme) => {
                                            if (theme.palette.mode === 'light') {
                                                return selectedItemIndex === index
                                                    ? 'primary.light'
                                                    : 'grey.200';
                                            }
                                            return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            textAlign: 'left',
                                            flexDirection: { xs: 'column', md: 'row' },
                                            alignItems: { md: 'center' },
                                            gap: 2.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: (theme) => {
                                                    if (theme.palette.mode === 'light') {
                                                        return selectedItemIndex === index
                                                            ? 'primary.main'
                                                            : 'grey.300';
                                                    }
                                                    return selectedItemIndex === index
                                                        ? 'primary.main'
                                                        : 'grey.700';
                                                },
                                            }}
                                        >
                                            {icon}
                                        </Box>
                                        <div>
                                            <Typography
                                                color="text.primary"
                                                variant="body2"
                                                fontWeight="bold"
                                            >
                                                {title}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="body2"
                                                sx={{ my: 0.5 }}
                                            >
                                                {description}
                                            </Typography>
                                            <Link
                                                color="primary"
                                                variant="body2"
                                                fontWeight="bold"
                                                sx={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    '& > svg': { transition: '0.2s' },
                                                    '&:hover > svg': { transform: 'translateX(2px)' },
                                                }}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                }}
                                            >
                                                <Link href={link} color="primary">
                                                    Learn more
                                                </Link>
                                                <ChevronRightRoundedIcon
                                                    fontSize="small"
                                                    sx={{ mt: '1px', ml: '2px' }}
                                                />
                                            </Link>
                                        </div>
                                    </Box>
                                </Card>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid   // when the window is larger than small, show the display
                        item
                        xs={12}
                        md={6}
                        sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
                    >
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                width: '100%',
                                display: { xs: 'none', sm: 'flex' },
                                pointerEvents: 'none',
                            }}
                        >
                            <Box
                                sx={{
                                    m: 'auto',
                                    width: 420,
                                    height: 500,
                                    backgroundSize: 'contain',
                                    backgroundImage: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? items[selectedItemIndex].imageLight
                                            : items[selectedItemIndex].imageDark,
                                }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
