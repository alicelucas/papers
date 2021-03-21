import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {SavedSectionAccordion} from "./SavedSectionAccordion";
import {EditSectionAccordion} from "./EditSectionAccordion";
import {useSelector} from "react-redux";
import {selectedSectionContentSelector} from "../../store/slice";

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

    const content = useSelector(selectedSectionContentSelector);

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onSwitch = () => {setIsEdit(!isEdit)}

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
                <SavedSectionAccordion content={content} isEdit={isEdit} onSwitch={onSwitch}/>
                <EditSectionAccordion content={content} isEdit={isEdit} onSwitch={onSwitch}/>
            </AccordionDetails>

        </Accordion>
    )
}
