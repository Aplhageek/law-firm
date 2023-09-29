import React from 'react'
import styles from './hooseUsCard.module.css';
import { ReactComponent as Icon } from '../../../assets/ChooseUsIcon.svg';

const ChooseUsCard = ({title}) => {
    return (
        <div className={styles.cardWrapper}>
            <Icon />
            <p className={styles.title}>{title} </p>
            <p className={styles.decription}>Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia
                consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.btn}>Read More</button>
        </div>
    )
}

export default ChooseUsCard;