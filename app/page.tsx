'use client';

import { cartActions } from '@/features/cart/cartSlice';
import { useAppDispatch } from '@/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';

export default function Home() {
  const [numOfItems, setNumOfItems] = useState(1);
  const [screenWidth, setScreenWidth] = useState(1920);
  const dispatch = useAppDispatch();

  function addToCartHandler() {
    dispatch(
      cartActions.addItem({
        name: 'Fall Limited Edition Sneakers',
        price: 125,
        id: 1,
        quantity: numOfItems,
        totalPrice: numOfItems * 125,
      })
    );
  }

  useEffect(() => {
    setScreenWidth(window?.innerWidth);
  }, []);

  const arrows = screenWidth >= 1024 ? false : true;

  const settings: Settings = {
    customPaging: function (i: number) {
      return (
        <Image
          src={`/images/image-product-${i + 1}-thumbnail.jpg`}
          alt='gallery image'
          className='rounded-lg thumb'
          width={300}
          height={300}
        />
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: arrows,
    nextArrow: (
      <Image
        src='/images/icon-next.svg'
        alt='next image icon'
        width={12}
        height={18}
      />
    ),
    prevArrow: (
      <Image
        src='/images/icon-previous.svg'
        alt='previous image icon'
        width={12}
        height={18}
      />
    ),
  };

  return (
    <div className='md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between'>
      <Slider {...settings} className='lg:py-4 lg:w-[85%]'>
        <Image
          src='/images/image-product-1.jpg'
          alt='product image 1'
          width={1920}
          height={1080}
          className='rounded-lg overflow-hidden'
        />
        <Image
          src='/images/image-product-2.jpg'
          alt='product image 2'
          width={1920}
          height={1080}
          className='rounded-lg overflow-hidden'
        />
        <Image
          src='/images/image-product-3.jpg'
          alt='product image 3'
          width={1920}
          height={1080}
          className='rounded-lg overflow-hidden'
        />
        <Image
          src='/images/image-product-4.jpg'
          alt='product image 4'
          width={1920}
          height={1080}
          className='rounded-lg overflow-hidden'
        />
      </Slider>

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
          <div className='bg-lightGrayishBlue rounded-lg flex items-center justify-between w-[35%] px-5 py-3 space-x-6'>
            <Image
              src='/images/icon-minus.svg'
              alt='minus icon'
              className='cursor-pointer'
              onClick={() =>
                setNumOfItems((prevItems) =>
                  prevItems <= 1 ? 1 : prevItems - 1
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
          <button
            onClick={addToCartHandler}
            className='flex justify-center space-x-2 w-[60%] py-3 bg-orange rounded-lg text-white font-bold shadow-xl shadow-orange/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange/80'
          >
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
