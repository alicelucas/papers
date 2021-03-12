import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import {SectionAccordion} from "./SectionAccordion";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
            whiteSpace: 'pre-line'
        },
    }),
);

type CardAccordionPropsType = {
    authors: string,
    date: string,
    journal: string,
    sections?: {
        why: string,
        what?: string,
        how?: string,
        results?: string,
    }
    title: string
}

export default function CardAccordion( {authors, date, journal, sections, title} : CardAccordionPropsType) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion disabled>
                <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>{[ [title, authors].join("\n"), "\n", [journal, date].join(", ") ].join("")}</Typography>
                </AccordionSummary>
            </Accordion>
            <SectionAccordion content={sections?.why} title={"Why is this work important?"}/>
            <SectionAccordion content={sections?.what} title={"What do they propose?"}/>
            <SectionAccordion content={sections?.how} title={"How does it work?"}/>
            <SectionAccordion content={sections?.results} title={"What are the results?"}/>
        </div>
    );
}