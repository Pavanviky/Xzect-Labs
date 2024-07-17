import './globals.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Design from './components/Design';
import Process from './components/Process';
import Services from './components/Services';
import Job from './components/Job';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import Price from './components/Price';
import Static from './components/Static';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
export const metadata = {
  title: 'My Next.js Website',
  description: 'A website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Banner />
        <Design />
        <Process/>
        <Services/>
        <Job/>
        <Blog/>
        <Subscribe/>
        <Price/>
        <Static/>
        <Testimonial/>
        <Footer/>
        
      </body>
    </html>
  );
}
