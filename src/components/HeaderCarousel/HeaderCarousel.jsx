import { useState, useRef, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { one, two, three, four, five, six, seven, eight } from '../../utils/CarouselImg';
import { FaPlay } from "react-icons/fa";
import { IoVideocamSharp } from "react-icons/io5";


function HeroCarousel() {
    const staticImages = [one, two, three, four, five, six, seven, eight];

    const [mouseHover, setMouseHover] = useState(false);
    const carouselRef = useRef(null);

    // Automatically scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const handleMouseEnter = () => setMouseHover(true);
    const handleMouseLeave = () => setMouseHover(false);

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
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center w-full px-4 lg:px-0 mb-20"
        >
            <button
                className={`${mouseHover ? 'block' : 'hidden'} 
        flex justify-center items-center 
        absolute left-2 md:left-4 lg:left-5 
        top-1/2 transform -translate-y-1/2 
        p-2 bg-gray-900 text-white 
        h-8 w-8 md:h-10 md:w-10 rounded-full
        z-10`}
                onClick={handlePrevClick}
            >
                <MdArrowBackIos className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <div
                ref={carouselRef}
                className="carousel carousel-center w-full rounded-box space-x-4 overflow-hidden"
            >
                {staticImages.map((image, index) => (
                    <div
                        key={index}
                        className="carousel-item w-[100vw] md:w-[60vw] lg:w-[62.5rem] h-[30vw] md:h-[10rem] lg:h-[23.438rem] flex-shrink-0 relative group"
                    >
                        <div className="absolute inset-0 rounded-box bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <img
                            src={image}
                            className="rounded-box w-full h-full object-cover border-4 border-transparent group-hover:border-[#d1ff00] transition-border duration-300"
                            alt={`Carousel item ${index + 1}`}
                        />
                        <div className="absolute md:block hidden md:bottom-5 md:right-5 lg:bottom-10 lg:right-10   space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-5">
                                <div>
                                    <FaPlay className="text-[#d1ff00] md:2xl lg:text-5xl cursor-pointer" />
                                    <h1>Play</h1>
                                </div>
                                <div>
                                    <IoVideocamSharp className="text-[#d1ff00] md:2xl lg:text-6xl cursor-pointer" />
                                    <h1>Triler</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className={`${mouseHover ? 'block' : 'hidden'
                    } flex justify-center items-center absolute right-2 md:right-4 lg:right-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full`}
                onClick={handleNextClick}
            >
                <MdArrowForwardIos className="h-4 w-4 md:h-5 md:w-5" />
            </button>
        </div>
    );
}

export default HeroCarousel;
