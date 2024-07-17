import styles from './Services.module.css';
import Image from 'next/image';

export default function ServicesSection() {
    const services = [
        { icon: '💻', title: 'Web & Software', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { icon: '📊', title: 'Data Science & Analytics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { icon: '💼', title: 'Accounting & Consulting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { icon: '✍️', title: 'Writing & Translations', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { icon: '📣', title: 'Sales & Marketing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { icon: '🎨', title: 'Graphics & Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { icon: '📱', title: 'Digital Marketing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { icon: '🎓', title: 'Education & Training', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ];

    return (
        <div className={styles.servicesContainer}>
            <h2 className={styles.servicesTitle}>Our Services</h2>
            <img src="/title-border.png" alt="Title Border" className={styles.servicesBorder} />
            <div className={styles.servicesGrid}>
                <div className={styles.gridContainer}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.cardIcon}>{service.icon}</span>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
