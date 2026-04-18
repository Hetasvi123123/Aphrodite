import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import History from './History'
import RakhiGallery from './RakhiGallery'
import RakhiCategory from './RakhiCategory'
import Celebration from './Celebration'
import Gifts from './Gifts'
import ContactOrder from './ContactOrder'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <History />
            <RakhiCategory />
            <RakhiGallery />
            <Celebration />
            <Gifts />
            <ContactOrder />
            <Footer />
        </>
    )
}

export default Home