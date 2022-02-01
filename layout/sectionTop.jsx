import styles from '../styles/SectionTop.module.scss'
import { itemsSectionTop, itemsSectionTopTwo } from '../constants/items'

export default function SectionTop() {
    return (
        <section className={styles['main__section-top']}>
            <div className={styles['section-top__title-wrapper']}>
                <h1 className={styles['section-top__title']}>Why work with us</h1>
            </div>
            <div className={styles['section-top__items-wrapper']}>
                {
                    itemsSectionTop.map((el, key) => {
                        return (
                            <div
                                key={key}
                                className={styles[`section-top__${el.name === 'Experience' ? 'item_bordered' : 'item'}`]}
                            >
                                <div>
                                    <h1 className={styles.item__title}>{el.name}</h1>
                                    <div className={styles.item__hint}></div>
                                </div>
                                <ul>
                                    {
                                        el.li.map((li, key) => {
                                            return <li className={styles.item__li} key={key}>{li}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles['section-top__hint']}>
            </div>
            <div className={styles['section-top__content']}>
                <ul className={styles.content__ul}>
                    <li className={styles['content__li-title']}>EXPERIENCE</li>
                    <li className={styles['content__li-subtitle']}>We take and dominate the markets competing in the most challenging niches.</li>
                    <li className={styles['content__li-info']}>&#128504; Product with more ore than 7 competitors in the top 100 BSR in the Patio, Lawn & Garden</li>
                    <li className={styles['content__li-info']}>&#128504; Product with more than 6 competitors in the top 100 BSR in the Patio, Lawn & Garden</li>
                    <li className={styles['content__li-info']}>&#128504; 3 competitors in the top 100 BSR in Health & Household</li>
                    <li className={styles['content__li-bottom-m']}>We create monopolies with the best result of 19 positions on the first page.</li>
                    <li className={styles['content__li-bottom']}>We liquidate the excessive or low performing inventory.</li>
                </ul>
                <div className={styles.content__div}>
                    <div className={styles.content__arrow}>

                    </div>
                    <h1 className={styles.content__h1}>0 to 8 figures</h1>
                </div>
            </div>
            <div className={styles.blocks}>
                {
                    itemsSectionTopTwo.map((el, key) => {
                        return (
                            <div
                                key={key}
                                className={styles[`blocks__item`]}
                            >
                                <div>
                                    <h1 className={styles.item__title}>{el.name}</h1>
                                    <div className={styles.item__hint}></div>
                                </div>
                                <ul>
                                    {
                                        el.li.map((li, key) => {
                                            return <li className={styles.blocks__li} key={key}>{li}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.section__bottom_title}>
                <h1 className={styles.bottom__title}>We can control an adequate rate of spending & sales.</h1>
                <h1 className={styles.bottom__title_bold}>LET OUR RESULTS SPEAK FOR US</h1>
            </div>
        </section>
    )
}