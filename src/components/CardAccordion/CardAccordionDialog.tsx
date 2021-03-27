import {Container, Dialog} from "@material-ui/core";
import React from "react";
import CardAccordion from "./CardAccordion";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card} from "../../types/Card";
import OutlinedCard from "../Card/Card";

const useStyles = makeStyles({
    dialog: {
        position: 'absolute',
        top: "100px"
    }
});

type CardAccordionDialogProps = {
    card: Card,
    handleClose: () => void;
    open: boolean
}
export const CardAccordionDialog = ( { card, handleClose, open} : CardAccordionDialogProps) => {
    const classes = useStyles();

    return (
        <Dialog classes={{paper: classes.dialog}} fullWidth={true} maxWidth="lg" onClose={handleClose} open={open}>
            <OutlinedCard/>
        </Dialog>
    )
}



