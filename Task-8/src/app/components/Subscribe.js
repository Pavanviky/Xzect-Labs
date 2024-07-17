import styles from './Subscribe.module.css';

const SubscribeSection = () => {
  return (
    <div className={styles.subscribeContainer}>
      <img src="blog2.jpg" alt="Subscribe Background Image" className={styles.subscribeImage} />
      <div className={styles.overlay}>
        <h1 className={styles.title}>Subscribe</h1>
        <p className={styles.subtitle}>Get weekly top new jobs delivered to your inbox.</p>
        <form className={styles.form}>
          <input type="email" placeholder="Enter your email" className={styles.input} />
          <button type="submit" className={styles.button}>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
