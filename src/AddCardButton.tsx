import Button from "@material-ui/core/Button";
import React from "react";
import {Dialog} from "@material-ui/core";
import CardForm from "./CardForm";
import CardAccordion from "./CardAccordion";

type NewCardButtonProps = {
    refreshCards: () => void;
}

const AddCardButton = ({refreshCards}: NewCardButtonProps) => {

    const [open, setOpen] = React.useState<boolean>(false)

    const onClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        //this might not be needed
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={onClick}> Add card </Button>
            <Dialog fullWidth={true} maxWidth="lg" onClose={handleClose} open={open}>
                {/*<CardForm refreshCards={refreshCards} handleClose={handleClose}/>*/}
                <CardAccordion />
            </Dialog>
        </React.Fragment>

    )
}

export default AddCardButton