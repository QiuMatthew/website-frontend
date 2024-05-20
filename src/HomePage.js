import { useThemeContext } from './ThemeContext.js'
import ToggleModeButton from './ToggleModeButton.js'

export default function HomePage() {
    const { mode, toggleMode } = useThemeContext()

    return (
        <>
        <p>This is HomePage.</p>
        <ToggleModeButton mode={mode} toggleMode={toggleMode} />
        </>
    )
}
