// DiscreteLogPage.js
import { useThemeContext } from './ThemeContext.js'
import ToggleModeButton from './ToggleModeButton.js'

export default function DiscreteLogPage() {
    const { mode, toggleMode } = useThemeContext()

    return (
        <>
        <p>This is DiscreteLogPage.</p>
        <ToggleModeButton mode={mode} toggleMode={toggleMode} />
        </>
    )
}
