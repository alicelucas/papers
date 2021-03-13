import AccordionDetails from "@material-ui/core/AccordionDetails";
import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import {EditSectionAccordion} from "./EditSectionAccordion";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Section} from "./types/Section";
import {useSelector} from "react-redux";
import {selectedCardSelector} from "./store/slice";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            whiteSpace: 'pre-line'
        }
    }),
);

type SectionAccordionDetailsProps = {
    section: Section
}

export const SectionAccordionDetails = ( {section } : SectionAccordionDetailsProps) => {

    const card = useSelector(selectedCardSelector);

    let content = "";

    switch(section) {
        case Section.Why:
            content = card.sections.why;
            break;
        case Section.What:
            content = card.sections.what;
            break;
        case Section.How:
            content = card.sections.how;
            break;
        case Section.Results:
            content = card.sections.results;
            break;
        default:
            break;
    }

    const classes = useStyles();

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const switchMode = () => {setIsEdit(!isEdit)}

    return (
        <AccordionDetails>
            {!isEdit &&
            (<React.Fragment>
                    <Typography className={classes.text}>
                        {content}
                    </Typography>
                    <IconButton onClick={switchMode}>
                        <EditIcon />
                    </IconButton>
                </React.Fragment>
            )}
            {isEdit && <EditSectionAccordion content={content} id={card._id} switchMode={switchMode}/> }
        </AccordionDetails>
    )
}