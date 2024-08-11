import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='bg-[#09262c]'>
            <div className='min-h-screen'>
                <Header />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home