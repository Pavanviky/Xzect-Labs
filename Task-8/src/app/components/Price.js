import styles from './Price.module.css';

const PriceSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Price</h1>
        <img src="title-border.png" alt="Title Border" className={styles.titleBorder} />
      </div>
      <div className={styles.cards}>
        {/* Price Card 1 */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>DEDICATED SERVERS</h2>
          <div className={styles.price}>$40</div>
          <div className={styles.perMonth}>PER MONTH</div>
          <ul className={styles.services}>
            <li className={styles.serviceItem}>Service One</li>
            <li className={styles.serviceItem}>Service Two</li>
            <li className={styles.serviceItem}>Service Three</li>
            <li className={styles.serviceItem}>Service Four</li>
            <li className={styles.serviceItem}>Service Five</li>
          </ul>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>

        {/* Price Card 2 */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>DEDICATED SERVERS</h2>
          <div className={styles.price}>$50</div>
          <div className={styles.perMonth}>PER MONTH</div>
          <ul className={styles.services}>
            <li className={styles.serviceItem}>Service One</li>
            <li className={styles.serviceItem}>Service Two</li>
            <li className={styles.serviceItem}>Service Three</li>
            <li className={styles.serviceItem}>Service Four</li>
            <li className={styles.serviceItem}>Service Five</li>
          </ul>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>

        {/* Price Card 3 */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>DEDICATED SERVERS</h2>
          <div className={styles.price}>$70</div>
          <div className={styles.perMonth}>PER MONTH</div>
          <ul className={styles.services}>
            <li className={styles.serviceItem}>Service One</li>
            <li className={styles.serviceItem}>Service Two</li>
            <li className={styles.serviceItem}>Service Three</li>
            <li className={styles.serviceItem}>Service Four</li>
            <li className={styles.serviceItem}>Service Five</li>
          </ul>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
