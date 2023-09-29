import React from 'react'
import styles from './TeamCard.module.css';

const TeamCard = ({data}) => {
    const {avtar , name, cases} = data;

  return (
    <div className={styles.teamcard_wrapper} >
        <img src={avtar} alt= {`${name}`} />
        <div className="details">
            <div className={styles.name}>{name}</div>
            <div className={styles.cases}> {cases} </div>
        </div>
    </div>
  )
}

export default TeamCard;