import React, { useState, useEffect, useRef } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const CategoryCarousel = ({ title, query }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState({});
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
                setLoading(images.reduce((acc, image, index) => {
                    acc[image] = true;
                    return acc;
                }, {}));
            })
            .catch((err) => {
                console.error(err);
            });
    }, [query]);

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

    const handleImageLoad = (src) => {
        setLoading(prevLoading => ({
            ...prevLoading,
            [src]: false
        }));
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
                    {data.length > 0 ? (
                        data.map((image, index) => (
                            <div
                                key={index}
                                className='carousel-item h-[120px] md:h-[200px] lg:h-[300px] relative'
                            >
                                {loading[image] && (
                                    <span className="loading loading-spinner bg-yellow-500 loading-md absolute inset-0 flex items-center justify-center z-10"></span>
                                )}
                                <img
                                    src={image}
                                    alt={`Carousel item ${index}`}
                                    className='rounded-xl object-cover w-full h-full transition-shadow duration-300 hover:shadow-lg hover:border-[#dcec18] border-2 border-transparent'
                                    onLoad={() => handleImageLoad(image)}
                                />
                            </div>
                        ))
                    ) : (
                        <div className='carousel-item h-[120px] md:h-[200px] lg:h-[300px]'>
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
