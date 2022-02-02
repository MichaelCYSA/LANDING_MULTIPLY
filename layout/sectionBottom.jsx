import styles from '../styles/SectionBottom.module.scss'
import { useState } from 'react'
import CarouselModal, { Modal, ModalGateway } from 'react-images'

export default function SectionBottom() {
    const [modalIsOpen, setModalIsOpen] = useState(null)
    return (
        <section className={styles.container}>
            <div className={styles['container__main-text']}>
                <div className={styles['main-text__decor']}>
                    <img className={styles['main-text__img-title']} src={'/button_arrow.svg'} />
                </div>
                <h1 className={styles['main-text__title']}>Or maybe you want to see how we launch products from 0?</h1>
            </div>
            <div className={styles.container__decor_box}>

            </div>
            <div className={styles.container__cases}>
                <div className={styles.cases__wrapper}>
                    <div className={styles.cases__item_1}>
                        <h1 className={styles.cases__title}>Case 6</h1>
                        <img
                            className={styles.cases__img}
                            src={'/case001.png'}
                            onClick={() => {
                                setModalIsOpen({
                                    index: 2,
                                    img: [
                                        { source: '/case001.png' }
                                    ]
                                })
                            }}
                        />
                        <div className={styles.cases__subtitle_wrapper}>
                            <div className={styles.cases__subtitle_decor}>
                                <h1 className={styles.cases__decor_text}>5</h1>
                            </div>
                            <h1 className={styles.cases__subtitle}>days of advertising.    6 - five star reviews.</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.cases__wrapper}>
                    <div className={styles.cases__item_2}>
                        <h1 className={styles.cases__title}>Case 7</h1>
                        <img
                            className={styles.cases__img}
                            src={'/case002.png'}
                            onClick={() => {
                                setModalIsOpen({
                                    index: 2,
                                    img: [
                                        { source: '/case002.png' }
                                    ]
                                })
                            }}
                        />
                        <div className={styles.cases__subtitle_wrapper}>
                            <div className={styles.cases__subtitle_decor}>
                                <h1 className={styles.cases__decor_text}>9</h1>
                            </div>
                            <h1 className={styles.cases__subtitle}>days of advertising.    11 - five star reviews.</h1>
                        </div>
                    </div>
                </div>

            </div>
            <ModalGateway>
                {
                    modalIsOpen && modalIsOpen.index === 1 && (
                        <Modal onClose={() => setModalIsOpen(null)}>
                            <CarouselModal views={modalIsOpen.img} />
                        </Modal>
                    )
                }
            </ModalGateway>
            <ModalGateway>
                {
                    modalIsOpen && modalIsOpen.index === 2 && (
                        <Modal onClose={() => setModalIsOpen(null)}>
                            <CarouselModal views={modalIsOpen.img} />
                        </Modal>
                    )
                }
            </ModalGateway>

        </section>
    )
}