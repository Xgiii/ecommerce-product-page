'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [numOfItems, setNumOfItems] = useState(0);

  return (
    <div className='md:p-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 justify-between'>
      <Image
        src='/images/image-product-1.jpg'
        alt='product image 1'
        width={1920}
        height={1080}
        className='rounded-lg'
      />
      <div className='flex flex-col'>
        <h2 className='text-orange tracking-widest font-bold py-4'>
          SNEAKER COMPANY
        </h2>
        <h1 className='text-black text-5xl font-bold'>
          Fall Limited Edition Sneakers
        </h1>
        <p className='text-darkGrayishBlue py-8'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </p>
        <div className='flex items-center'>
          <p className='font-bold text-3xl mr-6'>$125.00</p>
          <div className='bg-paleOrange text-orange px-2 py-1 rounded-md font-bold '>
            50%
          </div>
        </div>
        <div className='relative text-grayishBlue w-[59px]'>
          $250.00{' '}
          <hr className='absolute top-1/2 left-0 w-full border-grayishBlue' />
        </div>
        <div className='flex justify-between items-center my-4'>
          <div className='bg-lightGrayishBlue rounded-lg flex items-center justify-between w-[30%] px-5 py-3 space-x-6'>
            <Image
              src='/images/icon-minus.svg'
              alt='minus icon'
              className='cursor-pointer'
              onClick={() =>
                setNumOfItems((prevItems) =>
                  prevItems <= 0 ? 0 : prevItems - 1
                )
              }
              width={12}
              height={4}
            />
            <p className='font-bold'>{numOfItems}</p>
            <Image
              src='/images/icon-plus.svg'
              alt='plus icon'
              className='cursor-pointer'
              onClick={() => setNumOfItems((prevItems) => prevItems + 1)}
              width={12}
              height={12}
            />
          </div>
          <button className='flex justify-center space-x-2 w-[65%] py-3 bg-orange rounded-lg text-white font-bold shadow-xl shadow-orange/40'>
            <Image
              src='/images/icon-cart-white.svg'
              alt='cart icon'
              width={22}
              height={20}
            />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
