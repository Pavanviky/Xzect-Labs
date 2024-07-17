import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Guidepro logo illustration" width={40} height={40} className={styles.logo} />
        <span className={styles.title}>Guidepro</span>
      </div>
      <nav className={styles.nav}>
        <Link href="#" className={styles.navLink}>About Us</Link>
        <Link href="#" className={styles.navLink}>Pages</Link>
        <Link href="#" className={styles.navLink}>Jobs</Link>
        <Link href="#" className={styles.navLink}>Blog</Link>
        <Link href="#" className={styles.navLink}>Contact Us</Link>
      </nav>
      <div className={styles.loginContainer}>
        <button className={styles.loginButton}>Login / Sign Up</button>
      </div>
    </header>
  );
}
