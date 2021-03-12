import Button from "@material-ui/core/Button";
import React from "react";
import {Dialog} from "@material-ui/core";
import CardForm from "./CardForm";


const AddCardButton = () => {

    const [open, setOpen] = React.useState<boolean>(false)

    const onClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={onClick}> Add card </Button>
            <Dialog fullWidth={true} maxWidth="lg" onClose={handleClose} open={open}>
                <CardForm handleClose={handleClose}/>
            </Dialog>
        </React.Fragment>

    )
}

export default AddCardButton