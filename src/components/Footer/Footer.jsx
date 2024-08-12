import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#021114] h-[15.313rem] md:h-[10.938rem] w-full border-t-[0.1rem] border-t-gray-800'>
      <div className='lg:mx-[3.625rem] md:mx-5 mt-6 mb-3  text-white mx-3 '>
        <ul className="flex flex-wrap items-center gap-y-1 gap-x-3 ">
          <li>
            <a href="#"
              className="block font-sans text-xs lg:text-base antialiased font-normal leading-relaxed transition-colors hover:text-blue-500 focus:text-blue-500">
              Help&nbsp;Center
            </a>
          </li> |
          <li>
            <a href="#"
              className="block font-sans text-xs md:text-xs lg:text-base antialiased font-normal leading-relaxed transition-colors hover:text-blue-500 focus:text-blue-500">
              Contact&nbsp;us
            </a>
          </li> |
          <li>
            <a href="#"
              className="block font-sans text-xs md:text-xs lg:text-base antialiased font-normal leading-relaxed transition-colors hover:text-blue-500 focus:text-blue-500">
              Terms&nbsp;&&nbsp;Conditions
            </a>
          </li> |
          <li>
            <a href="#"
              className="block font-sans text-xs md:text-xs lg:text-base antialiased font-normal leading-relaxed transition-colors hover:text-blue-500 focus:text-blue-500">
              Privacy&nbsp;Policy
            </a>
          </li> |
          <li>
            <a href="#"
              className="block font-sans text-xs md:text-xs lg:text-base antialiased font-normal leading-relaxed transition-colors hover:text-blue-500 focus:text-blue-500">
              About&nbsp;us
            </a>
          </li> |
          <li>
            <a href="#"
              className="block font-sans text-xs md:text-xs lg:text-base antialiased font-normal leading-relaxed transition-colors hover:text-blue-500 focus:text-blue-500">
              Account&nbsp;Deletion
            </a>
          </li> |
          <li>
            <a href="#"
              className="block font-sans text-xs  md:text-xs lg:text-base antialiased font-normal leading-relaxed transition-colors hover:text-blue-500 focus:text-blue-500">
              Content&nbsp;Grievances
            </a>
          </li>
        </ul>
      </div>
      <div className='mt md:mx-5 lg:mx-[3.625rem] hidden md:block' >
        <p className='text-[#b5b5b5] text-base'>Copyright © 2024 LIONSGATEPLAY. All rights reserved.</p>
      </div>
      <div className=' md:flex md:mt-4 items-center'>
        <div className="flex flex-col  mx-3 md:ml-5  lg:ml-[3.625rem] border-blue-gray-50 md:flex-row md:justify-between">
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center items-center">
            <a href="#"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit ">
              <FaFacebookF className='text-white w-7 h-7' />
            </a>
            <a href="#"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit ">
              <FaInstagram className='text-white w-8 h-8' />
            </a>
            <a href="#"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit ">
              <FaTwitter className='text-white w-7 h-7' />
            </a>
            <a href="#"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit ">
              <FaYoutube className='text-white w-9 h-9' />
            </a>
          </div>
        </div>
        <div className='flex mx-3 mt-3 md:mt-0 gap-3 '>
          <img className='border rounded-md w-28 md:w-32 h-8 md:h-10 ' src="https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/images/store-apple.svg" alt="" />
          <img className='border rounded-md w-28 md:w-32 h-8 md:h-10' src="https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/images/store-googleplay.svg" alt="" />
        </div>
      </div>
      <div className='mt-3 mx-3 md:hidden ' >
        <p className='text-[#b5b5b5] text-xs'>Copyright © 2024 LIONSGATEPLAY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
