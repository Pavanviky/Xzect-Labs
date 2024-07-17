// page.js
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function HomePage() {
  return (
    <main>
      <header>
        <Navbar />
       
      </header>
      
      <Footer />
    </main>
  );
}
