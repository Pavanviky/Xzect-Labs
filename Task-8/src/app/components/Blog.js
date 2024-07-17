import styles from './Blog.module.css';

const BlogSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Blogs</h1>
        <img src="title-border.png" alt="Title Border" className={styles.titleBorder} />
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.blogPost}>
          <img src="blog1.jpg" alt="Blog 1 Image" className={styles.blogImage} />
          <div className={styles.blogContent}>
            <div className={styles.blogMeta}>
              <div className={styles.blogDate}>05 Jun</div>
              <div className={styles.blogAuthor}>
                <i className="fas fa-user" /> Henry H.Garrick
                <i className="far fa-calendar-alt" style={{ marginLeft: '1rem', marginRight: '0.75rem' }} />
                November 16, 2016
              </div>
              <div className={styles.divider}></div>
            </div>
            <h3 className={styles.blogTitle}>How to Get Better Learning</h3>
            <p className={styles.blogDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.readMore}>Read More</div>
          </div>
        </div>
        <div className={styles.blogPost}>
          <img src="blog2.jpg" alt="Blog 2 Image" className={styles.blogImage} />
          <div className={styles.blogContent}>
            <div className={styles.blogMeta}>
              <div className={styles.blogDate}>08 Jun</div>
              <div className={styles.blogAuthor}>
                <i className="fas fa-user" /> Henry H.Garrick
                <i className="far fa-calendar-alt" style={{ marginLeft: '1rem', marginRight: '0.75rem' }} />
                November 16, 2016
              </div>
              <div className={styles.divider}></div>
            </div>
            <h3 className={styles.blogTitle}>How to Get Better Learning</h3>
            <p className={styles.blogDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.readMore}>Read More</div>
          </div>
        </div>
        <div className={styles.blogPost}>
          <img src="blog3.jpg" alt="Blog 3 Image" className={styles.blogImage} />
          <div className={styles.blogContent}>
            <div className={styles.blogMeta}>
              <div className={styles.blogDate}>10 Sep</div>
              <div className={styles.blogAuthor}>
                <i className="fas fa-user" /> Henry H.Garrick
                <i className="far fa-calendar-alt" style={{ marginLeft: '1rem', marginRight: '0.75rem' }} />
                November 16, 2016
              </div>
              <div className={styles.divider}></div>
            </div>
            <h3 className={styles.blogTitle}>How to Get Better Learning</h3>
            <p className={styles.blogDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.readMore}>Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
