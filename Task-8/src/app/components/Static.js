import styles from './Static.module.css';

const StatisticsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.statistics}>
        {/* Statistic 1 */}
        <div className={styles.statistic}>
          <img src="count-icon1.png" alt="Faculty Icon" className={styles.icon} />
          <div className={styles.count}>150+</div>
          <div className={styles.label}>FACULTIES</div>
        </div>

        {/* White Line */}
        <div className={styles.line}></div>

        {/* Statistic 2 */}
        <div className={styles.statistic}>
          <img src="count-icon2.png" alt="Student Icon" className={styles.icon} />
          <div className={styles.count}>2300+</div>
          <div className={styles.label}>STUDENTS</div>
        </div>

        {/* White Line */}
        <div className={styles.line}></div>

        {/* Statistic 3 */}
        <div className={styles.statistic}>
          <img src="count-icon3.png" alt="Course Icon" className={styles.icon} />
          <div className={styles.count}>40+</div>
          <div className={styles.label}>COURSES</div>
        </div>

        {/* White Line */}
        <div className={styles.line}></div>

        {/* Statistic 4 */}
        <div className={styles.statistic}>
          <img src="count-icon4.png" alt="Country Icon" className={styles.icon} />
          <div className={styles.count}>80+</div>
          <div className={styles.label}>COUNTRIES</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
