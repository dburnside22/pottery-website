import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5e6d3] text-[#4a3728] flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App