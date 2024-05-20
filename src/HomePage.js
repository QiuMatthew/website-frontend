import { useThemeContext } from './ThemeContext.js'
import ToggleColorMode from './ToggleColorMode.js'

export default function HomePage() {
    const { mode, toggleColorMode } = useThemeContext()

    return (
        <>
        <p>This is HomePage.</p>
        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </>
    )
}
