import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel'
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel'

const Home = () => {
    return (
        <div className='bg-[#09262c] min-h-screen '>
            <div className='sticky z-20  top-0 left-0 right-0 '>
                <Header />
            </div>
            <div className='min-h-screen '>
                <HeroCarousel/>
                <CategoryCarousel/>
                <CategoryCarousel/>
                <CategoryCarousel/>


            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home