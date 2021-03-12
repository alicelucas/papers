import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import React, {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {EditSectionAccordion} from "./EditSectionAccordion";

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
    title: string,
    content?: string
}

export const SectionAccordion = ( {title, content}: SectionAccordionPropsType) => {
    const classes = useStyles();

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const switchMode = () => {setIsEdit(!isEdit)}


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
                {isEdit && <EditSectionAccordion content={content} switchMode={switchMode}/> }
            </AccordionDetails>
        </Accordion>
    )
}
