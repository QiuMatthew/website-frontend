import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<div><p>Hello</p></div>} />

                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
