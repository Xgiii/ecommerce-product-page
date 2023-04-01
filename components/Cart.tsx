'use client';

import { useAppSelector } from '@/hooks';
import Image from 'next/image';

function Cart() {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <div className='fixed md:absolute top-14 left-0 md:-left-[40vw] lg:-left-[20vw] w-[calc(100vw-3rem)] md:w-[50vw] lg:w-[30vw]  bg-white shadow-2xl rounded-lg p-4'>
      <h1 className='font-bold pb-4'>Cart</h1>
      <hr className='absolute w-full left-0' />
      {items.length === 0 ? (
        <p className='flex items-center justify-center font-bold text-grayishBlue mt-12'>
          Your cart is empty.
        </p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between py-4 space-x-4'
          >
            <Image
              src='/images/image-product-1-thumbnail.jpg'
              alt='product image'
              width={400}
              height={400}
              className='w-14 h-14 rounded-lg'
            />
            <div className='flex flex-col'>
              <p className='text-darkGrayishBlue'>{item.name}</p>
              <p className='text-darkGrayishBlue'>
                ${item.price.toFixed(2)} x {item.quantity}{' '}
                <span className='text-black font-bold'>
                  ${item.totalPrice.toFixed(2)}
                </span>
              </p>
            </div>
            <Image
              src='/images/icon-delete.svg'
              alt='trash icon'
              width={14}
              height={16}
            />
          </div>
        ))
      )}
      {items.length !== 0 && (
        <button className='w-full py-3 bg-orange rounded-lg text-white font-bold'>
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
