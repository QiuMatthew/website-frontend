// HomePage.js
import { Divider } from '@mui/material'
import { Navbar, Title, Subtitle, Hero, Footer } from './components/'
import HeroImage from './assets/quote.png'

export default function HomePage() {
    const navbarItems = [
        {
            text: 'Home',
            sectionID: 'home'
        },
        {
            text: 'About', 
            sectionID: 'about',
        },
        {
            text: 'Application', 
            sectionID: 'application',
        },
        {
            text: 'Profile', 
            sectionID: 'profile',
        },
    ]

    return (
        <>
            <Navbar navbarItems={navbarItems} />
            <Title titleText="Hello, I'm" titleTextColored="Q" />
            <Subtitle />
            <Hero image={HeroImage} />
            <Divider />
            <Footer />
        </>
    )
}
