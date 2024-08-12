import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel'
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel'
import RankingCarousel from '../../components/RakningCarousel/RankingCarousel'
import HeroCarousel from '../../components/HeroCarouel/HeroCarousel'


const Home = () => {
    return (
        <div className='bg-[#09262c] min-h-screen '>
            <div className='sticky z-20  top-0 left-0 right-0 '>
                <Header />
            </div>
            <div className='min-h-screen '>
                <HeaderCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <RankingCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <HeroCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <HeroCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
                <CategoryCarousel />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home