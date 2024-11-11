import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
