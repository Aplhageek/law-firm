import React from 'react'
import styles from './Carousel.module.css';
import { ReactComponent as Prev } from '../../assets/PrevArrow.svg';
import { ReactComponent as Next } from '../../assets/NextArrow.svg';
import { useSwiper } from 'swiper/react';


const NavigationButtons = () => {
    const swiper  = useSwiper();

  return (
    <div className={styles.btnNavigation} >
        <Prev className={styles.CAROUSELbuttonLeft}  onClick={() => swiper.slidePrev()}/> 
        <Next className={styles.CAROUSELbuttonRigth} onClick={() => swiper.slideNext()} /> 
    </div>
  )
}

export default NavigationButtons;