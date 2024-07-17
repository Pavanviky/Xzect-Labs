import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Testimonial.module.css';

const TestimonialSection = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Happy Candidates</h1>
      </header>
      <section className={styles.card}>
        <div className={styles.cardContent}>
          <blockquote className={styles.blockquote}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.quoteText}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <FaQuoteRight className={styles.quoteIcon} />
          </blockquote>
          <div className={styles.testimonial}>
            <img className={styles.image} src="testimonial-img1.png" alt="Placeholder image of Josi Welleam, a confident person with glasses, short hair, and a friendly expression" />
            <p className={styles.name}>Josi Welleam</p>
            <p className={styles.position}>FOUNDER, GITGAT</p>
          </div>
        </div>
        <div className={styles.leftArrow}>
          <FaChevronLeft />
        </div>
        <div className={styles.rightArrow}>
          <FaChevronRight />
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
