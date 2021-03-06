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
    open: boolean;
}
export const CardAccordionDialog = ( { open } : CardAccordionDialogProps) => {
    const classes = useStyles();

    return (
        <Dialog classes={{paper: classes.dialog}} fullWidth={true} maxWidth="lg" open={open}>
            <CardAccordion/>
        </Dialog>
    )
}



