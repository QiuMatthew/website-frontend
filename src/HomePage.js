// HomePage.js
import ToggleModeButton from './ToggleModeButton.js'
import { Navbar } from './components/'

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
        <p>This is HomePage.</p>
        <ToggleModeButton />
        <Navbar navbarItems={navbarItems} />
        </>
    )
}
