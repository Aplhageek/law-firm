import React from 'react'
import styles from './Footer.module.css';
import { ReactComponent as CompanyLogo } from  '../../assets/companyLogo.svg';
import { ReactComponent as Insta } from  '../../assets/Instagram.svg';
import { ReactComponent as FB } from  '../../assets/Facebook.svg';
import { ReactComponent as Tweet } from  '../../assets/Tweeter.svg';
import { ReactComponent as Pin } from  '../../assets/Pintrest.svg';




const Footer = () => {
      return (
        <footer className={styles.footer} >
            <div className={styles.footer_info}>
              <div><CompanyLogo className={styles.logo}/></div>
              <div className={styles.footer_texts}>
              <p>Home</p>
              <p>Attorneys</p>
              <p>Practice Areas</p>
              <p>About Us</p>
              </div>
              <div className={styles.social_logo}> <Insta className={styles.logo}/> <FB className={styles.logo}/> <Tweet className={styles.logo}/> <Pin className={styles.logo}/>  </div>
            </div>  
            <div className={styles.disclaimer}>
              <p>© 2020 Acme. All right reserved.</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
        </footer>

    )
}

export default Footer