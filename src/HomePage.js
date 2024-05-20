// HomePage.js
import { Navbar, Title } from './components/'

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
        </>
    )
}
