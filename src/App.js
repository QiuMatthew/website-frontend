// App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './HomePage.js'
import DiscreteLogPage from './DiscreteLogPage.js'
import EasySlidePage from './EasySlidePage.js'
import ChouseisanPage from './ChouseisanPage.js'

import { ThemeContextProvider } from './ThemeContext.js'

function App() {
    return (
        <ThemeContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<HomePage />} />
                    <Route path='/apps/discrete-log' exact element={<DiscreteLogPage />} />
                    <Route path='/apps/easy-slide' exact element={<EasySlidePage />} />
                    <Route path='/apps/chouseisan' exact element={<ChouseisanPage />} />

                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeContextProvider>
    )
}

export default App;
