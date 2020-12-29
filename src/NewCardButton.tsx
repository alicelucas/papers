import Button from "@material-ui/core/Button";
import React from "react";
import {Dialog, DialogContentText} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogContent from "@material-ui/core/DialogContent";

const NewCardButton = () => {

    const [open, setOpen] = React.useState<boolean>(false)

    const onClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        //this might not be needed
        console.log("Closing")
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={onClick}> Add card </Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>

    )
}

export default NewCardButton