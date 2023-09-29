import React from 'react'
import Navbar from '../Navbar/Navbar';
import styles from './Page1.module.css';
import Hero from '../Hero/Hero';


const Page1 = () => {
  return (
    <div id={styles.page1}>
        <Navbar/>
        <Hero />
    </div>
  )
}

export default Page1;