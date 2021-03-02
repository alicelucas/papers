import Button from "@material-ui/core/Button";
import React from "react";
import {Dialog} from "@material-ui/core";
import NewCardForm from "./NewCardForm";
import {Card} from "./types/Card";

type NewCardButtonProps = {
    refreshCards: () => void;
}

const NewCardButton = ( {refreshCards}: NewCardButtonProps) => {

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
            <Dialog onClose={handleClose} open={open}>
                <NewCardForm refreshCards={refreshCards} handleClose={handleClose}/>
            </Dialog>
        </React.Fragment>

    )
}

export default NewCardButton