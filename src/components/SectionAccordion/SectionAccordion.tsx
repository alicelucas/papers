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
import {useDispatch, useSelector} from "react-redux";
import {selectedCardSelector, selectedSectionSelector} from "../../store/slice";
import {sectionTitles} from "../../types/SectionTitles";

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
    onClick: () => void,
    title: string
}

export const SectionAccordion = ( {onClick, title} : SectionAccordionPropsType) => {
    const classes = useStyles();

    const content = useSelector(selectedSectionSelector);

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onSwitch = () => {setIsEdit(!isEdit)}

    const card = useSelector(selectedCardSelector);

    return (
        <Accordion onClick={onClick}>
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
