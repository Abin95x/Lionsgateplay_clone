import { useState, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { one, two, three, four, five, six, seven, eight } from '../../utils/CarouselImg';

function HeroCarousel() {
    const staticImages = [one, two, three, four, five, six, seven, eight];

    const [mouseHover, setMouseHover] = useState(false);
    const carouselRef = useRef(null);

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
                className={`${mouseHover ? 'block' : 'hidden'
                    } flex justify-center items-center absolute left-2 md:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 pl-2 bg-gray-900 text-white h-8 w-8 md:h-10 md:w-10 rounded-full`}
                onClick={handlePrevClick}
            >
                <MdArrowBackIos className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <div
                ref={carouselRef}
                className="carousel carousel-center w-full rounded-box space-x-4 overflow-hidden"
            >
                {staticImages.map((image, index) => (
                    <div key={index} className="carousel-item w-[100vw] md:w-[60vw] lg:w-[62.5rem] h-[30vw] md:h-[10rem] lg:h-[23.438rem] flex-shrink-0">
                        <img
                            src={image}
                            className="rounded-box w-full h-full object-cover hover:border-[#d1ff00] border-4 border-transparent"
                            alt={`Carousel item ${index + 1}`}
                        />
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
