import React from 'react'
import styles from './ChooseUs.module.css';
import ChooseUsCard from './chooseUsCard/ChooseUsCard';


const ChooseUs = () => {
  return (
    <div className={styles.ChooseUs_wrapper} >
        <p className={styles.ChooseUs_title}>Why Choose us?</p>
        <div className={styles.chooseus_card}>
          <ChooseUsCard  title={"98% Success Rate"}/>
          <ChooseUsCard  title={"99% Success Rate"}/>
          <ChooseUsCard  title={"100% Success Rate"}/>
        </div>
    </div>
  )
}

export default ChooseUs;