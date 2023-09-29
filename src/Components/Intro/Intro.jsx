import React from 'react'
import styles from './Intro.module.css';


const Intro = () => {
    return (
        <div className={styles.Intro_wrapper} >
            <p className={styles.Intro_Heading}>Let’s Introduce <br /> Ourself</p>
            <div className={styles.line}></div>
            <div className={styles.description}>
                <p className={styles.Intro_Description_heading}>Criminal Lawyer</p>
                <p className={styles.Intro_Description}>
                    Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia consequatduis
                    enim velit mollit Exercitation.            </p>
            </div>
        </div>
    )
}

export default Intro;