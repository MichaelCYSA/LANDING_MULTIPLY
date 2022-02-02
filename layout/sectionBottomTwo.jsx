import styles from '../styles/SectionBottomTwo.module.scss'

export default function SectionBottomTwo() {

    return (
        <section className={styles.container}>
            <div className={styles.container__item}>
                <div className={styles.item__decor}>
                    <h1 className={styles.item__decor_text}>Speed & Quality</h1>
                </div>
                <ul className={styles.item__ul}>
                    <li className={styles.item__li}>
                        To process all the information at a high velocity, we developed in-house software, so instead of filtering a product for 2-5 days,
                        we can do it in <b>just one day</b> – with our keyword filtering tool.
                    </li>
                    <li className={styles.item__li}>
                        Regarding the setup – manually, it usually takes up to a week. However,
                        with our <b>amazon advertising bulk file creator</b>, we can do it in minutes up to a maximum of a few hours.
                    </li>
                    <li className={styles.item__li}>
                        We set up thousands of campaigns and filter dozens of thousands of keywords.
                        These are the deepest and most advanced setup types on the market and definitely,
                        we do not miss a single client’ search inquiry. 
                    </li>
                    <li className={styles.item__li}>
                       <b>It's better to do more than less.</b>
                    </li>
                </ul>
            </div>
            <div className={styles.container__item}>
                <div className={styles.item__decor}>
                    <h1 className={styles.item__decor_text}>Multilateral</h1>
                </div>
                <ul className={styles.item__ul_2}>
                    <li className={styles.item__li}>
                        We are not doing just ADS. We have a big background in copywriting, SEO,
                        team management, and solving Amazon account issues.
                        We also launched many businesses from 0 during our 5 years on Amazon.
                    </li>
                    <li className={styles.item__li}>All these skills help us see the full image of your business. </li>
                    <li className={styles.item__li}><b>We require only your goals - the rest is our job.</b></li>
                </ul>
            </div>
            <div id={'parsing'} className={styles.container__item_2}>
                <h1 className={styles.item_2__title}>Pricing:</h1>
                <div className={styles.item_2__decor}>
                    <h1 className={styles.item_2__decor_text1}>0.5$</h1>
                    <h1 className={styles.item_2__decor_text2}>Average per unit sold fee.</h1>
                </div>
                <p className={styles.item_2__p}>
                    <b>WE DO NOT</b> charge more than the new value we bring to your business.
                    <br />
                    <b>YOU DO NOT PAY</b> if our results are not better than your current ones.
                </p>
            </div>
            <div className={styles.container__item_3}>

            </div>

        </section>
    )
}