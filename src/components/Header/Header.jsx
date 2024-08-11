import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  return (
    <nav className="flex items-center box-border bg-transparent">
      <div className="mx-[8.125rem] md:mx-[3.625rem] w-full h-16 md:h-[4.895rem]">
        <div className="flex justify-between text-white text-sm">
          <div className="flex items-center mt-2 md:mt-5">
            <div className="w-[7.913rem] flex">
              <img
                src="https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/web3/resources/images/channels/voucher-thankyou-page/rebrand-lionsgateplay.png"
                alt="LIONSGATEPLAY"
              />
            </div>
            <div className=" hidden md:block">
              <ul className="flex gap-16 mx-7">
                <li>HOME</li>
                <li>SHOWS</li>
                <li>MOVIES</li>
              </ul>
            </div>
          </div>
          <div className='hidden md:block'>
            <ul className="flex gap-10 mt-8 ">
              <li className="flex items-center gap-2">
                <CiSearch className="h-5 w-5" />
                SEARCH
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
