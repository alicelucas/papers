import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import {SectionAccordion} from "../SectionAccordion/SectionAccordion";
import {Card} from "../../types/Card";
import {Section} from "../../types/Section";
import {useDispatch} from "react-redux";
import {cardsSlice} from "../../store/slice";
import {sectionTitles} from "../../types/SectionTitles";

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
  card: Card
}

export default function CardAccordion( {card} : CardAccordionPropsType) {
    const classes = useStyles();

    const dispatch  = useDispatch();

    // const handleEditCard = async (newSection) => {
    //     const newCard: CardPreview = {
    //
    //     }
        // create new card object
        // const newCard: CardPreview = {
        //     authors: cardContent.authors,
        //     date: cardContent.date,
        //     journal: cardContent.journal,
        //     title: cardContent.title
        // }
        //
        // axios.post("http://127.0.0.1:8000/addCard", newCard).then( (response) => {
        //     refreshCards();
        // }).catch( (error) => console.info(error));

    // }
    const onSectionClick = ( section: Section) => {
        dispatch(cardsSlice.actions.setSelectedSection( {section: section }))
    }

    return (
        <div className={classes.root}>
            <Accordion disabled>
                <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>{[ [card.title, card.authors].join("\n"), "\n", [card.journal, card.date].join(", ") ].join("")}</Typography>
                </AccordionSummary>
            </Accordion>
            <SectionAccordion onClick={() => {onSectionClick(Section.Why)}} title={sectionTitles.Why}/>
            <SectionAccordion onClick={() => {onSectionClick(Section.Why)}}  title={sectionTitles.What}/>
            <SectionAccordion onClick={() => {onSectionClick(Section.Why)}}  title={sectionTitles.How} />
            <SectionAccordion onClick={() => {onSectionClick(Section.Why)}}  title={sectionTitles.Results}/>
        </div>
    );
}