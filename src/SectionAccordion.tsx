import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Section} from "./types/Section";
import {SectionAccordionDetails} from "./SectionAccordionDetails";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            paddingTop: 2,
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        text: {
            whiteSpace: 'pre-line'
        }
    }),
);

type SectionAccordionPropsType = {
    section: Section
}

export const SectionAccordion = ( {section}: SectionAccordionPropsType) => {
    const classes = useStyles();

    let title = "";

    switch(section) {
        case Section.Why:
            title = "Why is this work important?";
            break;
        case Section.What:
            title = "What do they propose?";
            break;
        case Section.How:
            title = "How does it work?";
            break;
        case Section.Results:
            title = "What are the results?";
            break;
        default:
            break;
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>

            <SectionAccordionDetails section={section}/>

        </Accordion>
    )
}
