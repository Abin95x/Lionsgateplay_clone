import React, { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='md:hidden block'>
            <div
                tabIndex={0}
                role="button"
                onClick={toggleDropdown}
                className="md:hidden block h-12 w-8 mr-10 fixed left-2 top-1 z-50"
            >
                <HiOutlineBars3 className='h-full w-full' />
            </div>

            {isOpen && (
                <div className="absolute top-12 left-0 w-full shadow-lg z-50 bg-[#082125]">
                    <div className='bg-[#082125] h-24    flex items-center gap-4 mx-7'>
                        <button className="btn text-black  bg-[#d1ff00]">LOG IN</button>
                        <button className="btn text-black bg-[#d1ff00]">SIGN UP</button>
                    </div>
                    <ul className="list-none p-4 m-0 bg-[#021114] text-white">
                        <li className="py-2  ">
                            <a href="#" className=" hover:text-blue-600">HOME</a>
                        </li>
                        <li className="py-2  ">
                            <a href="#" className=" hover:text-blue-600">SHOWS</a>
                        </li>
                        <li className="py-2  ">
                            <a href="#" className=" hover:text-blue-600">MOVIES</a>
                        </li>

                    </ul>
                </div>

            )}
        </div>
    );
};

export default MobileNav;
