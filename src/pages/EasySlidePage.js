import { Button, Typography, Box, Divider } from "@mui/material"
import { Container } from "@mui/system"
import { SlideshowRounded } from "@mui/icons-material"
import { FileUploadButton, Footer, Navbar, Subtitle, ThemedBoxContainer, Title } from "../components"

// EasySlidePage.js
export default function EasySlidePage() {
    const navbarItems = [
        {
            text: 'Home',
            sectionID: 'home'
        },
        {
            text: 'Manual',
            sectionID: 'manual',
        },
    ]
    const subtitleList = [
        "This is an app to quickly create slide using markdown grammer.",
        "The project is based on reveal-md (https://github.com/webpro/reveal-md).",
        "Have a try!",
    ]
    return (
        <Box    // make sure the background color is expaned to entire viewport when content is not enough
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.primary',
            }}
        >
            <Navbar navbarItems={navbarItems} />
            <Title titleText="Easy" titleTextColored="Slide" />
            <Subtitle contentList={subtitleList} />
            <ThemedBoxContainer>
                <Container sx={{ pt: { xs: 7, sm: 10 }, pb: { xs: 1, sm: 2 } }}>
                    <Typography variant='body1' color='text.primary' textAlign='center'>
                        You can upload your markdown file here, be careful about sensitive information.
                    </Typography>
                </Container>
                <FileUploadButton />
                <Container sx={{ pt: { xs: 1, sm: 2 }, pb: { xs: 1, sm: 2 } }}>
                    <Typography variant='body1' color='text.primary' textAlign='center'>
                        Then you can check the generated slide here
                    </Typography>
                </Container>
                <Button variant='contained' href='http://localhost:1948/slide.md' startIcon={<SlideshowRounded />}>
                    Slide Page
                </Button>
            </ThemedBoxContainer>
            <Divider sx={{ pt: 6 }} />
            <Footer />
        </Box>
    )
}
