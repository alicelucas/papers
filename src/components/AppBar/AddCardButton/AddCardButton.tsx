import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../AppBar/AppBar.css";
import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import CardForm from "../../CardForm/CardForm";

export const AddCardButton = () => {
    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);

    const onClick = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false)
    }
    return (
        <React.Fragment>
            <Button onClick={onClick} color="inherit"><Typography className={classes.title} >Add Card</Typography></Button>
            <Dialog fullWidth={true} maxWidth="lg" onClose={onClose} open={open} >
                <CardForm handleClose={onClose}/>
            </Dialog>
    </React.Fragment> )


}
