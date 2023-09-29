import React from 'react'
import styles from '../Footer/Footer.module.css';
import navStyles from './Navbar.module.css'
import { ReactComponent as CompanyLogo } from '../../assets/companyLogo.svg';


const Navbar = () => {
    return (
        
            <nav className={navStyles.NavbarWrapper}>
                <div><CompanyLogo className={styles.logo} /></div>
                <div className={styles.footer_texts}>
                    <p>Home</p>
                    <p>Attorneys</p>
                    <p>Practice Areas</p>
                    <p>About Us</p>
                </div>
                <button className={navStyles.Navbarbtn}> Contact Now  </button>
            </nav>
     
    )
}

export default Navbar;