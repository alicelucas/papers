import {Dialog} from "@material-ui/core";
import React from "react";
import CardAccordion from "./CardAccordion";

type CardAccordionDialogProps = {
    open: boolean;
}
export const CardAccordionDialog = ( { open } : CardAccordionDialogProps) => {
    return (
        <Dialog fullWidth={true} maxWidth="lg" open={open}>
            <CardAccordion/>
        </Dialog>
    )
}



