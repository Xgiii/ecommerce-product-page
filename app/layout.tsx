'use client';

import './globals.css';
import { Kumbh_Sans } from 'next/font/google';
import MainHeader from '@/components/MainHeader';
import { Provider } from 'react-redux';
import { store } from '@/store';

const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={kumbh.className || 'font-sans'} lang='en'>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </head>
      <body className='px-6 md:px-16 lg:px-24'>
        <Provider store={store}>
          <MainHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
