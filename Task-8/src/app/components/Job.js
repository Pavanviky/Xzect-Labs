import React from 'react';
import styles from './Job.module.css';

const Jobs = () => {
    const jobs = [
        {
            title: "Tech-Work",
            link: "job-details.html",
            salary: "$20k - $25k",
            location: "20-27 Quadra, Market Street, Victoria Canada",
            icon: "job-icon1.png"
        },
        {
            title: "UI / UX Designer",
            link: "job-details.html",
            salary: "$20k - $25k",
            location: "20-27 Quadra, Market Street, Victoria Canada",
            icon: "job-icon2.png"
        },
        {
            title: "UI / UX Designer",
            link: "job-details.html",
            salary: "$20k - $25k",
            location: "20-27 Quadra, Market Street, Victoria Canada",
            icon: "job-icon2.png"
        },
        {
            title: "Tech-Work",
            link: "job-details.html",
            salary: "$20k - $25k",
            location: "20-27 Quadra, Market Street, Victoria Canada",
            icon: "job-icon1.png"
        }
    ];

    return (
        <div className={styles.jobsContainer}>
            <h1 className={styles.jobsTitle}>Current Jobs</h1>
            <img src="title-border.png" className={styles.jobsTitleBorder} alt="Title border" />
            <div className={styles.buttonsContainer}>
                <button className={styles.filterButton}>All</button>
                <button className={styles.filterButton}>New</button>
                <button className={styles.filterButton}>Featured</button>
                <button className={styles.filterButton}>Recent</button>
                <button className={styles.filterButton}>Full Time</button>
                <button className={styles.filterButton}>Part Time</button>
            </div>
            <div className={styles.jobCardsContainer}>
                {jobs.map((job, index) => (
                    <div key={index} className={styles.jobCard}>
                        <img src={job.icon} alt={`Icon for ${job.title}`} className={styles.jobIcon} />
                        <div className={styles.jobInfo}>
                            <h2 className={styles.jobTitle}>{job.title}</h2>
                            <a href={job.link} className={styles.jobLink}>{job.link}</a>
                            <p className={styles.jobSalary}>{job.salary}</p>
                            <p className={styles.jobLocation}>Location: {job.location}</p>
                        </div>
                        <button className={styles.applyButton}>Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
