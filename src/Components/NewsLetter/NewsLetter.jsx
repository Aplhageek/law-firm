import React from 'react'
import styles from './NewsLetter.module.css';
import { enqueueSnackbar } from 'notistack';


const NewsLetter = () => {
    const isValid = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event)
        const name = event.target.form[0].value;
        const email = event.target.form[1].value;
        if (!email || !email.includes("@")) {
            enqueueSnackbar("Please enter your email", { variant: "error" });
        } else if (!name) {
            enqueueSnackbar("Please enter your name", { variant: "error" });
        } else {
            enqueueSnackbar("Thank you for subscribing", { variant: "success" });
            const input1 = document.getElementById('input1');
        const input2 = document.getElementById('input2');

        // Clear the input fields
        input1.value = '';
        input2.value = '';
        }

        
    }

    return (
        <div className={styles.NewsLetterWrappet}>
            <h2 className={styles.title}>Subscribe Our Newsletter</h2>
            <form className={styles.newsLetterInputs} >

                <input id='input1' className={styles.input1} type="text" placeholder="Name:" />
                <input id='input2' className={styles.input} type="text" placeholder="Enter your email" />
                <button className={styles.button} type='submit' onClick={(e) => isValid(e)} > SEND</button>


            </form>
        </div>
    )
}

export default NewsLetter;