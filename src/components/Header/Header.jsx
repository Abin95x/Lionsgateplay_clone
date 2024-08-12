import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineBars3 } from "react-icons/hi2";
import MobileNav from '../MobileNav/MobileNav';

const Header = () => {
  return (
    <nav className="flex items-center box-border bg-transparent">
      <div className="mx-[8.125rem] md:ml-5 lg:mx-[3.625rem] w-full h-16 md:h-[4.895rem]">
        <div className="flex justify-between text-white text-sm">
          {/* <HiOutlineBars3 className='md:hidden block h-12 w-8 mr-10 fixed  left-2' /> */}
          <MobileNav/>

          <div className="flex items-center mt-2 md:mt-5">

            <div className="w-[7.913rem] flex">

              <img
                src="https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/web3/resources/images/channels/voucher-thankyou-page/rebrand-lionsgateplay.png"
                alt="LIONSGATEPLAY"
                className="h-full object-contain"
              />
            </div>
            <div className=" hidden md:block">
              <ul className="flex gap-16 md:gap-4 lg:gap-12  md:mx-3 lg:mx-7 md:text-xs lg:text-sm">

                <li>HOME</li>
                <li>SHOWS</li>
                <li>MOVIES</li>

              </ul>
            </div>
          </div>
          <div className='hidden md:block md:-mr-24 lg:mr-8'>
            <ul className="flex gap-10 md:gap-4 mt-8 items-center">
              <li className="flex items-center md:gap-4 lg:gap-12">
                <CiSearch className="h-5 w-5 md:mx-5  " />
                <span className='md:hidden lg:text-sm lg:block'>SEARCH</span>
              </li>
              <li>LOG IN</li>
              <li>SIGN UP</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
