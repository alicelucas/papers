import {Dialog} from "@material-ui/core";
import React from "react";
import CardAccordion from "./CardAccordion";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CardPreview} from "../../types/CardPreview";

const useStyles = makeStyles({
    dialog: {
        position: 'absolute',
        top: "100px"
    }
});

type CardAccordionDialogProps = {
    card: CardPreview,
    handleClose: () => void;
    open: boolean
}
export const CardAccordionDialog = ( { card, handleClose, open} : CardAccordionDialogProps) => {
    const classes = useStyles();

    return (
        <Dialog classes={{paper: classes.dialog}} fullWidth={true} maxWidth="lg" onClose={handleClose} open={open}>
            <CardAccordion card={card}/>
        </Dialog>
    )
}



