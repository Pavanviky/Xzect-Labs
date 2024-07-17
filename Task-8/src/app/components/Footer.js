import styles from './Footer.module.css';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <section className={`${styles.footerSection} text-white`}>
      <div className={`${styles.container} mx-auto py-10 px-6`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className={styles.logoContainer}>
              <img src="footer-logo.png" alt="A stylized person icon representing JobPool" className="w-full h-full" />
            </div>
            
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter email address"
              className={`${styles.input} px-6 py-4 rounded-l-full bg-white text-black text-lg border border-gray-300 focus:outline-none focus:border-gray-400`}
            />
            <button className={`${styles.subscribeButton} px-6 py-4 rounded-r-full text-white text-lg transition duration-300 hover:scale-105`}>
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className={`${styles.divider} border-t border-white mt-10`}></div>

        <div className={`${styles.contactInfo} flex justify-between items-center mt-10`}>
          <div className={styles.contactItem}>
            <span className="font-bold text-xl">Need Help?</span>
            <div className="mt-2">
              <FaPhoneAlt className="mr-2 text-xl" />
              CALL US: 1800-0000-1234
            </div>
          </div>

          <div className={styles.contactItem}>
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

          <div className={styles.contactItem}>
            <span className="font-bold text-xl">Follow Us</span>
            <div className={`${styles.socialIcons} flex mt-2 space-x-4`}>
              <FaFacebookF className="text-xl" />
              <FaTwitter className="text-xl" />
              <FaGooglePlusG className="text-xl" />
              <FaLinkedinIn className="text-xl" />
              <FaInstagram className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      <footer className={`${styles.footer} py-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-lg">© Copyright 2024. JobPool. All Rights Reserved</span>
          <div className={`${styles.footerLinks} flex space-x-4`}>
            <a href="#" className="text-lg">HOME</a>
            <a href="#" className="text-lg">ABOUT US</a>
            <a href="#" className="text-lg">SERVICES</a>
            <a href="#" className="text-lg">CURRENT JOBS</a>
            <a href="#" className="text-lg">OUR PLANS</a>
            <a href="#" className="text-lg">BLOG</a>
            <a href="#" className="text-lg">CONTACT</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
