import React from 'react'
import styles from './CarouselCard.module.css';



const CarouselCard = ({data}) => {

  const { avtar , name, designation , descrption} = data;

  return (
    <div className={styles.CarouselCard_wrapper} >
      <img src={avtar} alt="" />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.designation}>{designation}</p>
      </div>
      <p className={styles.descrip}> {descrption} </p>
    </div>
  )
}

export default CarouselCard;