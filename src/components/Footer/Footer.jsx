import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#021114] h-[15.313rem] md:h-[10.938rem] w-full border-t-[0.1rem] border-t-gray-700'>
      <div className='md:mx-[3.625rem] mt-6 text-white'>
        <ul className='flex gap-3 md:gap-3'>
          <li className='w-full sm:w-1/2 md:w-auto'>Help&nbsp;Center</li> |
          <li className='w-full sm:w-1/2 md:w-auto'>Contact&nbsp;us</li> |
          <li className='w-full sm:w-1/2 md:w-auto'>Terms&nbsp;&&nbsp;Conditions</li> |
          <li className='w-full sm:w-1/2 md:w-auto'>Privacy&nbsp;Policy</li> |
          <li className='w-full sm:w-1/2 md:w-auto'>About&nbsp;us</li> |
          <li className='w-full sm:w-1/2 md:w-auto'>&nbsp;Deletion</li> |
          <li className='w-full sm:w-1/2 md:w-auto'>Content&nbsp;Grievances</li> 
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
