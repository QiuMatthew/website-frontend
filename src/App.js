import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<div><p>Hello, this is the homepage</p></div>} />
                <Route path='/apps/discrete-log' exact element={<div><p>This is the discrete log page</p></div>} />
                <Route path='/apps/easy-slide' exact element={<div><p>This is the easy slide page</p></div>} />
                <Route path='/apps/chouseisan' exact element={<div><p>This is the chouseisan page</p></div>} />

                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
