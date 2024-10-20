import React, { useState, useEffect } from 'react';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';

// import logo
import Logo from '../assets/img/logo.png';

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  }, [header]);

  return (
    <header
      className={`${
        header ? 'top-0 h-[80px]' : 'top-9'
      } fixed bg-bg2 text-white w-full max-w-[90vw] lg:max-w-[1170px]  mx-auto rounded-md h-[70px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-center`}
    >
      <div className='flex justify-between items-center  w-[90%]  '>
        {/* logo */}
        {/* <a href='#'>
          <img src={Logo} alt='' />
        </a> */}
        <div>
        <h1 className='text-white'>Purple Pilates</h1>

        </div>
        {/* nav */}
        <div className='hidden lg:block' >
        <Nav />

        </div>
       
        
       <NavMobile />
        
      </div>
     
       {/* <div className='flex gap-x-4 lg:gap-x-9'>
          <button className='text-heading font-medium text-sm lg:text-base hover:text-orange transition'>
            Sign In
          </button>
          <button className='btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition'>
            Sign Up
          </button>
        </div> */}
    </header>
  );
};

export default Header;
