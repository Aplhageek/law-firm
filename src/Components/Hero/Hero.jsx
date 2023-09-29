import React, { useState } from 'react'
import styles from './Hero.module.css';
import { ReactComponent as Group } from '../../assets/Group 10591.svg';
import { ReactComponent as Mail } from '../../assets/Mail.svg';
import { enqueueSnackbar } from 'notistack';


const Hero = () => {
    const [val, setVal] = useState("");

    function handleChange(e){
        setVal(e.target.value);
    }

    function isValid(e){
        e.preventDefault();
        console.log(e);

        const input  = e.target.form[0].value;

        if(input === "" || !input.includes("@") ){
            enqueueSnackbar("Please enter a valid email address" , {variant: "error"});
        }else{
            enqueueSnackbar("I will get back with you ASAP", {variant: "success"});
        }

    }


    return (
        <div className={styles.heroWrapper} >
            <div className={styles.hero_info}>
                <div className={styles.heroHeading}>
                    <h1 className={styles.heroTitle}>You don’t have to </h1>
                    <h1 className={styles.heroTitle2}>Fight them Alone.</h1>
                </div>
                <p className={styles.heroSubtitle}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                <form className={styles.hero_input}>
                    {!val && <div className={styles.placeholder}>
                        <Mail className='icon' /> <span>Enter your eamil address</span>
                    </div>}
                    <input type="text" className={styles.input} placeholder=""  onChange={handleChange}/>

                    <button type='submit' className={styles.btn} onClick={(e) => isValid(e)} >Let's Talk</button>
                </form>
            </div>
            <div className={styles.hero_img}>
                <Group className={styles.Personimg} />
            </div>
        </div>
    )
}

export default Hero;