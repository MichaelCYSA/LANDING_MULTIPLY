import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <h1 className={styles.content__title}>Contact us IF:</h1>
                <ul className={styles.content__ul}>
                    <li className={styles.content__li}>1.  You want to keep the same profit margin but increase at the same time your sales volume.</li>
                    <li className={styles.content__li}>2.  You want to keep the same amount of sales but reduce your advertising budget.</li>
                    <li className={styles.content__li}>3.  You want to get and keep the BESTSELLER badge.</li>
                    <li className={styles.content__li}>4.  You want to liquidate excessive inventory or low performing products.</li>
                    <li className={styles.content__li}>5.  You need to raise your market share for a greater business evaluation.</li>
                    <li className={styles.content__li_bold}>*These are the most frequent goals, but we are ready for every project.</li>
                </ul>
                <button className={styles.content__button}>Let’s discuss it!</button>
            </div>
        </footer>
    )
}