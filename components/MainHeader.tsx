'use client';

import Image from 'next/image';
import React, { useState } from 'react';

function MainHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 ${
          mobileMenu ? 'animate-fade-in' : 'animate-fade-out'
        } ${mobileMenu ? 'visible' : 'delay-150 invisible'}`}
        onClick={() => {
          setMobileMenu(false);
        }}
      ></div>
      <header className='flex justify-between items-center py-4 md:py-10'>
        <div className='flex items-end md:items-center'>
          <Image
            src='/images/icon-menu.svg'
            alt='menu icon'
            width={16}
            height={15}
            className='block md:hidden mr-4 cursor-pointer'
            onClick={() => setMobileMenu(true)}
          />
          <Image
            src='/images/logo.svg'
            alt='logo'
            width={138}
            height={20}
            className='mr-12'
          />
          <ul className='md:flex items-center text-darkGrayishBlue space-x-6 hidden [&>*]:cursor-pointer'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex items-center space-x-6 md:space-x-12'>
          <Image
            src='/images/icon-cart.svg'
            alt='cart icon'
            width={22}
            height={20}
          />
          <Image
            src='/images/image-avatar.png'
            alt='user avatar'
            className='w-[30px] h-[30px] md:w-[50px] md:h-[50px]'
            width={50}
            height={50}
          />
        </div>
      </header>
      <hr />
      <div
        className={`absolute top-0 h-screen w-2/3 bg-white z-20 p-6 md:hidden backdrop-brightness-0 transition-all ${
          mobileMenu ? 'left-0' : '-left-full'
        }`}
      >
        <Image
          src='/images/icon-close.svg'
          alt='menu close icon'
          width={16}
          height={15}
          className='block md:hidden mr-4 cursor-pointer'
          onClick={() => setMobileMenu(false)}
        />
        <ul
          className='
        flex flex-col items-center text-darkGrayishBlue space-y-6 [&>*]:cursor-pointer'
        >
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default MainHeader;
