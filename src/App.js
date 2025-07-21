// App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import DiscreteLogPage from './pages/DiscreteLogPage.js'
import EasySlidePage from './pages/EasySlidePage.js'
import ChouseisanPage from './pages/ChouseisanPage.js'

import { ThemeContextProvider } from './ThemeContext.js'
import { ErrorBoundary } from './components/'

function App() {
    return (
        <ThemeContextProvider>
            <ErrorBoundary>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/apps/discrete-log' exact element={<DiscreteLogPage />} />
                        <Route path='/apps/easy-slide' exact element={<EasySlidePage />} />
                        <Route path='/apps/chouseisan' exact element={<ChouseisanPage />} />

                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </ThemeContextProvider>
    )
}

export default App;
