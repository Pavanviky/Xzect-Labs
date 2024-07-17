import styles from './Process.module.css';
import Image from 'next/image';

export default function ProcessSection() {
  return (
    <>
      <div className={styles.processContainer}>
        <h2 className={styles.processTitle}>Our Works Process</h2>
        <div className={styles.processBorder}>
          <Image src="/title-border.png" alt="Title Border" width={200} height={10} />
        </div>
      </div>

      <div className={styles.processGrid}>
        <div className={styles.gridContainer}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          {/* Card 1 */}
          <div className={styles.card}>
            <i className={`fa fa-user-circle ${styles.cardIcon}`} style={{ color: '#000' }}></i>
            <h3 className={styles.cardTitle}>Create Account</h3>
            <p className={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className={styles.cardButton}>
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <i className={`fa fa-search ${styles.cardIcon}`} style={{ color: '#0b0813' }}></i>
            <h3 className={styles.cardTitle}>Search Job</h3>
            <p className={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className={styles.cardButton}>
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <i className={`fa fa-file-text-o ${styles.cardIcon}`} style={{ color: 'rgb(54, 53, 53)' }}></i>
            <h3 className={styles.cardTitle}>Submit Resume</h3>
            <p className={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className={styles.cardButton}>
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
