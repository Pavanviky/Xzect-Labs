import styles from './Banner.module.css';
import Image from 'next/image';

export default function Banner() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Find The Job That Fits Your Life</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Image src="/man.png" alt="Illustration of a person" width={288} height={240} className={styles.image} />
          <div className={styles.buttonContainer}>
            <button className={styles.knowMoreButton}>Know More</button>
          </div>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} placeholder="Search for jobs" />
        <div className={styles.selectContainer}>
          <select className={styles.select}>
            <option>Any Category</option>
          </select>
        </div>
        <button className={styles.searchButton}>Search Jobs</button>
      </div>
    </main>
  );
}
