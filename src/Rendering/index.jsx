import React from 'react'
import Navigation from './Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'

const Rendering = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Rendering
