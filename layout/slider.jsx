
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import styles from '../styles/Slider.module.scss'
import "react-multi-carousel/lib/styles.css";
import CarouselModal, { Modal, ModalGateway } from 'react-images'
import { useState } from "react";

export default function CaseSlider() {
    const listOfData = [
        {
            title: '14.44% tAcos',
            subtitle: '70 Days.',
            case: '1',
            img: '/case1.png'
        },
        {
           title: '9.64% tAcos',
           subtitle: '80 Days.',
            case: '2',
            img: '/case2.png'
        },
        {
            title: '12.82% tAcos',
            subtitle: '60 Days.',
            case: '3',
            img: '/case3.png'
        },
        {
            title: '12.97% tAcos',
            subtitle: '35 Days.',
            case: '4',
            img: '/case4.png'
        },
        {
            title: '10.89% tAcos',
            subtitle: '60 Days.',
            case: '5',
            img: '/case5.png'
        }
    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1215, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };
    
    const [modalIsOpen, setModalIsOpen] = useState(null)
    
    return (
        <div id={'cases'} className={styles.container}>
            <div className={styles.container__decorator}>      
                <Carousel 
                    responsive={responsive}
                    showDots={true}
                    dotListClass={styles.dots}
                >
                     {
                         listOfData.map((el, index) => (
                            <div key={index} className={styles.item}>
                                <div className={styles.item__case}>
                                    <h1 className={styles.item__case_name}>Case {el.case}</h1>
                                </div>
                                <img onClick={() => {
                                    setModalIsOpen({
                                        index: index,
                                        img: [
                                            {source: el.img}
                                        ]
                                    })
                                }} className={styles.item__img} src={el.img} />
                                <div className={styles.item__text}>
                                     <h1 className={styles.item__title}>{el.title}</h1>
                                     <h2 className={styles.item__subtitle}>{el.subtitle}</h2>
                                </div>
                                <ModalGateway>
                                    {
                                        modalIsOpen && modalIsOpen.index === index && (
                                        <Modal onClose={() => setModalIsOpen(null)}>
                                            <CarouselModal views={modalIsOpen.img} />
                                        </Modal>
                                        )
                                    }
                                </ModalGateway>
                            </div>
                         ))
                     }
                </Carousel>;
            </div>
        </div>
    )
}