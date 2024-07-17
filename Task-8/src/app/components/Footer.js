// FooterSection.jsx
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const FooterSection = () => {
  return (
    <section className={styles.footerBackground}>
      <div className={`${styles.container} mx-auto py-10 px-6`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className={styles.logoContainer}>
              <img src="/footer-logo.png" alt="A stylized person icon representing JobPool" className="w-full h-full" />
            </div>
          </div>
          <div className={`${styles.emailContainer} ml-2`}>
            <input
              type="text"
              placeholder="Enter email address"
              className={`${styles.emailInput} px-6 py-4 rounded-l-full bg-white text-black text-lg border border-gray-300 focus:outline-none focus:border-gray-400`}
            />
            <button className={`${styles.subscribeButton} px-6 py-4 rounded-r-full text-white text-lg transition duration-300 hover:scale-105`}>
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="border-t border-white mt-10"></div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">Need Help?</span>
            <div className="mt-2">
              <FaPhoneAlt className="mr-2 text-xl" />CALL US: 1800-0000-1234
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">Email:</span>
            <div className="mt-2">
              <div className="flex">
                <span className="text-xl">info@test.com</span>
              </div>
              <div className="flex">
                <span className="text-xl">support@test.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">Follow Us</span>
            <div className="flex mt-2 space-x-4">
              <FaFacebookF className="text-xl" />
              <FaTwitter className="text-xl" />
              <FaGooglePlusG className="text-xl" />
              <FaLinkedinIn className="text-xl" />
              <FaInstagram className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      <footer className={`${styles.footerBottom} py-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-lg">© Copyright 2024. JobPool. All Rights Reserved</span>
          <div className="flex space-x-4">
            <a href="#" className="text-lg hover:text-gray-300">HOME</a>
            <a href="#" className="text-lg hover:text-gray-300">ABOUT US</a>
            <a href="#" className="text-lg hover:text-gray-300">SERVICES</a>
            <a href="#" className="text-lg hover:text-gray-300">CURRENT JOBS</a>
            <a href="#" className="text-lg hover:text-gray-300">OUR PLANS</a>
            <a href="#" className="text-lg hover:text-gray-300">BLOG</a>
            <a href="#" className="text-lg hover:text-gray-300">CONTACT</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
