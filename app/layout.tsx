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
      <body className='px-6 md:px-16 lg:px-24'>
        <Provider store={store}>
          <MainHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
