import {Dialog} from "@material-ui/core";
import React from "react";
import CardAccordion from "./CardAccordion";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    dialog: {
        position: 'absolute',
        top: "100px"
    }
});

type CardAccordionDialogProps = {
    authors: string,
    date: string,
    journal: string,
    handleClose: () => void;
    open: boolean;
    sections?: {
        why: string,
        what?: string,
        how?: string,
        results?: string,
    }
    title: string
}
export const CardAccordionDialog = ( { authors, date, journal, handleClose, open, sections, title } : CardAccordionDialogProps) => {
    const classes = useStyles();

    return (
        <Dialog classes={{paper: classes.dialog}} fullWidth={true} maxWidth="lg" onClose={handleClose} open={open}>
            <CardAccordion authors={authors} date={date} journal={journal} sections={sections} title={title}/>
        </Dialog>
    )
}



