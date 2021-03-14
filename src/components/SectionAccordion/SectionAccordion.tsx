import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Section} from "../../types/Section";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {SavedSectionAccordion} from "./SavedSectionAccordion";
import {EditSectionAccordion} from "./EditSectionAccordion";
import {useSelector} from "react-redux";
import {selectedCardSelector} from "../../store/slice";

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

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onSwitch = () => {setIsEdit(!isEdit)}

    const card = useSelector(selectedCardSelector);

    let content = "", title = "";

    switch(section) {
        case Section.Why:
            content = card.sections.why;
            title = "Why is this work important?";
            break;
        case Section.What:
            content = card.sections.what;
            title = "What do they propose?";
            break;
        case Section.How:
            content = card.sections.how;
            title = "How does it work?";
            break;
        case Section.Results:
            content = card.sections.results;
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

            <AccordionDetails>
                {!isEdit && <SavedSectionAccordion content={content} onSwitch={onSwitch}/>}
                {isEdit && <EditSectionAccordion content={content} id={card._id} onSwitch={onSwitch}/> }
            </AccordionDetails>

        </Accordion>
    )
}
