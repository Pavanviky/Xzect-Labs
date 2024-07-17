import styles from './Design.module.css';
import Image from 'next/image';

export default function DesignSection() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.trendingJobs}>
        <Image 
          src="/people-group.png" 
          alt="Illustration of a man in a suit with crossed arms with a big magnifying glass" 
          width={240} 
          height={240} 
          className={styles.trendingImage} 
        />
        <div>
          <h1 className={styles.trendingTitle}>You're Looking for Trending Jobs</h1>
          <p className={styles.trendingDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..
          </p>
        </div>
      </div>
      <div className={styles.jobCategories}>
        <div className={styles.categoryContainer}>
          <Image 
            src="/laptop.png" 
            alt="Developer" 
            width={80} 
            height={80} 
            className={styles.categoryImage} 
          />
          <h2 className={styles.categoryTitle}>DEVELOPER</h2>
          <p className={styles.categoryDescription}>7 Jobs</p>
        </div>
        <div className={styles.categoryContainer}>
          <Image 
            src="/technology.png" 
            alt="Technology" 
            width={80} 
            height={80} 
            className={styles.categoryImage} 
          />
          <h2 className={styles.categoryTitle}>TECHNOLOGY</h2>
          <p className={styles.categoryDescription}>5 Jobs</p>
        </div>
        <div className={styles.categoryContainer}>
          <Image 
            src="/government.png" 
            alt="Government" 
            width={80} 
            height={80} 
            className={styles.categoryImage} 
          />
          <h2 className={styles.categoryTitle}>GOVERNMENT</h2>
          <p className={styles.categoryDescription}>2 Jobs</p>
        </div>
      </div>
    </div>
  );
}
