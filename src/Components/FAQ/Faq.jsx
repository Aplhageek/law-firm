import React from 'react'
import styles from './Faq.module.css';
import BasicAccordion from '../Accordion/Accordion';


const Faq = () => {

    const data= [
        {   id: 1,
            que : "How much is my case worth?",
            ans : "The case is worth $1000.00"
        },
        {   id: 2,
            que : "What should I do right after car accidect",
            ans : "You should call the police immediately",
        },
        {   id: 3,
            que : "How much is my case worth?",
            ans : "The case is worth $1000.00"
        }
    ]

    return (
        <div className={styles.faq_wrapper} >
            <p className={styles.faq_title}>FAQ</p>


            <div className={styles.faq_details}>
                <p className={styles.answer}>Amet minim mollit non deserunt ullamco est sit <br />aliqua dolor do amet sint. </p>


                <div className={styles.qna_wrapper}>
                    <p className={styles.questions}>Do I need a personal injury report?</p>
                    <p className={styles.answer}>Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequatduis
                        enim velit mollit Exer. Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                    
                    {
                        data?.map(ele => {
                            return(
                                <div key={ele.id}>
                                <div className={styles.Faline}></div>
                                <BasicAccordion data={ele} />
                                </div>
                            )
                        })
                    }
                    

                    
                </div>
            </div>
        </div>
    )
}

export default Faq;