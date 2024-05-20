import { useThemeContext } from './ThemeContext.js'
import ToggleColorMode from './ToggleColorMode.js'

export default function DiscreteLogPage() {
    const { mode, toggleColorMode } = useThemeContext()

    return (
        <>
        <p>This is DiscreteLogPage.</p>
        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </>
    )
}
