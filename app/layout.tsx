import './globals.sass';
import { Lato } from 'next/font/google';
import { Logo } from '@/ui/Logo/Logo';
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'StreamO',
  description: 'All the best streamers in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="StreamO" />
        <meta property="og:image" content="%PUBLIC_URL%/thumb.png" />
        <meta property="og:description" content="All the best streamers in one place." />
      </head>
      <body className={lato.className}>
        <Logo />
        {children}
      </body>
    </html>
  );
}
