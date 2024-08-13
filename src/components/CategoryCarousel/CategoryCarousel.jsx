import React, { useState, useEffect, useRef } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaPlay } from "react-icons/fa";

const CategoryCarousel = ({ title, query }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const carouselRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                const images = data.map(item => item?.show?.image?.original);
                setData(images);
                setIsLoading(true); // Set loading state to true when data is being fetched
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false); // Set loading state to false if there's an error
            });
    }, [query]);

    useEffect(() => {
        if (data.length > 0) {
            // Check if all images are loaded
            const imagePromises = data.map(src =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                })
            );

            Promise.all(imagePromises)
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false));
        }
    }, [data]);

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='relative ml-5 mb-12 md:ml-6 lg:ml-14'>
            <h1 className='text-white text-base md:text-lg lg:text-2xl'>
                {title}
            </h1>

            <div className='relative group'>
                <button
                    className='flex items-center justify-center absolute left-2 md:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'
                    onClick={handlePrevClick}
                >
                    <MdArrowBackIos className='h-4 ml-2 w-4 md:h-5 md:w-5' />
                </button>

                <div
                    ref={carouselRef}
                    className='carousel carousel-center gap-1 w-full mt-4 bg-transparent space-x-4 overflow-x-auto'
                >
                    {isLoading ? (
                        <div className='w-full h-[120px] md:h-[200px] lg:h-[300px] flex items-center justify-center'>
                            <span className="loading loading-spinner bg-yellow-500 loading-md"></span>
                        </div>
                    ) : data.length > 0 ? (
                        data.map((image, index) => (
                            <div
                                key={index}
                                className='carousel-item relative h-[120px] md:h-[200px] lg:h-[300px]'
                            >
                                <div className='relative overflow-hidden rounded-xl border-2 border-transparent hover:border-[#dcec18]'>
                                    <img
                                        src={image}
                                        alt={`movie`}
                                        className='object-cover w-full h-full transition-shadow duration-300 hover:shadow-lg'
                                    />
                                    <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50'>
                                        <div className=' hidden md:block absolute bottom-3 left-3 text-[#dcec18]'>
                                            <FaPlay className='text-2xl ' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className='carousel-item relative h-[120px] md:h-[200px] lg:h-[300px]'>
                            <img
                                src='https://via.placeholder.com/300'
                                alt='Placeholder'
                                className='rounded-lg object-cover w-full h-full transition-shadow duration-300 hover:shadow-lg hover:border-[#d1ff00] border-4 border-transparent'
                            />
                        </div>
                    )}
                </div>

                <button
                    className='flex items-center justify-center absolute right-2 md:right-4 lg:right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'
                    onClick={handleNextClick}
                >
                    <MdArrowForwardIos className='h-4 w-4 md:h-5 md:w-5' />
                </button>
            </div>
        </div>
    );
};

export default CategoryCarousel;
