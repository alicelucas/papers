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
    handleClose: () => void;
    open: boolean;
    sections?: {
        why: string,
        what?: string,
        how?: string,
        results?: string,
    }
}
export const CardAccordionDialog = ( { handleClose, open, sections } : CardAccordionDialogProps) => {
    const classes = useStyles();

    return (
        <Dialog classes={{paper: classes.dialog}} fullWidth={true} maxWidth="lg" onClose={handleClose} open={open}>
            <CardAccordion sections={sections}/>
        </Dialog>
    )
}



