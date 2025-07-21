import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { Footer, Navbar, Subtitle, ThemedBoxContainer, Title } from "../components"

// ChouseisanPage.js
export default function ChouseisanPage() {
    const navbarItems = [
        {
            text: 'Home',
            sectionID: 'home'
        },
        {
            text: 'Highlights',
            sectionID: 'highlights',
        },
        {
            text: 'Manual',
            sectionID: 'manual',
        },
    ]
    const subtitleList = [
        "Schedule your event with multiple participant.",
        "This is an enhanced version of chouseisan.com.",
        "We support new features including sending email to organizer etc.",
    ]

    return (
        <Box    // make sure the background color is expaned to entire viewport when content is not enough
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.primary',
            }}
        >

            <Navbar navbarItems={navbarItems} />
            <Title titleText="Chouseisan" titleTextColored="Scheduler" />
            <Subtitle contentList={subtitleList} />
            <ThemedBoxContainer>
                <Container sx={{ pt: { xs: 7, sm: 10 }, pb: { xs: 1, sm: 2 } }}>
                    <Typography variant='body1' color='text.primary' textAlign='center'>
                        Here is the APP page
                    </Typography>
                </Container>
            </ThemedBoxContainer>
            <ThemedBoxContainer>
                <Button variant='contained' href='/'>
                    Chouseisan++
                </Button>
            </ThemedBoxContainer>
            <Divider sx={{ pt: 6 }} />
            <Footer />
        </Box>
    )
}
