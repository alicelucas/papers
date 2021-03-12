import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import React, {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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
                {!isEdit && (<Typography className={classes.text}>
                    {content}
                </Typography>)}
                {isEdit && (  <TextField InputProps={ {className: classes.input}} fullWidth defaultValue={content} id="filled-basic" multiline={true} variant="filled" />)}
                <IconButton onClick={() => {setIsEdit(!isEdit)}}>
                    <EditIcon />
                </IconButton>
            </AccordionDetails>
        </Accordion>
    )
}
