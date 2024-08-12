import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel'
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel'
import RankingCarousel from '../../components/RakningCarousel/RankingCarousel'
import HeroCarousel from '../../components/HeroCarouel/HeroCarousel'


const Home = () => {

    // console.log(import.meta.env.MOVIE_URL)
    return (
        <div className='bg-[#09262c] min-h-screen '>
            <div className='sticky z-20  top-0 left-0 right-0 '>
                <Header />
            </div>
            <div className='min-h-screen '>
                <HeaderCarousel />
                <CategoryCarousel title={'Premieres Of Lionsgate Play'} query={'boys'}/>
                <CategoryCarousel title={'Debutants Showcase'} query={'boys'}/>
                <RankingCarousel title={'Top 10 in India'} query={'top'}/>
                <CategoryCarousel title={'Watch Next'} query={'boys'}/>
                <CategoryCarousel title={'Premi'} query={'boys'}/>
                <HeroCarousel title={'Coming Soon on Lionsgate Play'} query={'girls'} />
                <CategoryCarousel title={'Trending This Week'} query={'boys'}/>
                <CategoryCarousel title={'Watch Next'} query={'next'}/>
                <HeroCarousel title={'Dubbed For You'} query={'dub'}/>
                <CategoryCarousel title={'Best Actors'} query={'actors'}/>
                <CategoryCarousel title={'Sportsflix'} query={'sports'}/>
                <CategoryCarousel title={'Women In Action'} query={'women'}/>
                <CategoryCarousel title={'Popular TV Shows'} query={'tv'}/>
                <CategoryCarousel title={'Dubbed For You'} query={'boys'}/>
                <CategoryCarousel title={'Action'} query={'action'}/>
                <CategoryCarousel title={'Thriller'} query={'thriller'}/>
                <CategoryCarousel title={'House Of Horror'} query={'horror'}/>
                <CategoryCarousel title={'Steamy & Seductive'} query={'boys'}/>
                <CategoryCarousel title={'Romance'} query={'romance'}/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home