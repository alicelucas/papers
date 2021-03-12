import React from "react";
import {TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            paddingTop: 2,
        },
        text: {
            whiteSpace: 'pre-line'
        }
    }),
);

type EditSectionAccordionProps = {
    content?: string,
    switchMode: () => void;
}

export const EditSectionAccordion = ( { content, switchMode } : EditSectionAccordionProps) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TextField InputProps={ {className: classes.input}} fullWidth defaultValue={content} id="filled-basic" multiline={true} variant="filled" />
            <IconButton onClick={switchMode}>
                <EditIcon />
            </IconButton>
        </React.Fragment> )
}