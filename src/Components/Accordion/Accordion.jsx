import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as Icon } from '../../assets/AccordionIcon.svg';
import styles from '../FAQ/Faq.module.css'

export default function BasicAccordion({ data }) {

    const { que, ans } = data;

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<Icon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={styles.questions}>{que}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.answer}>{ans}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}