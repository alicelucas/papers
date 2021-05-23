import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../AppBar/AppBar.css";
import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import CardForm from "../../CardForm/CardForm";
import {AboutButton} from "../../About/AboutButton /AboutButton";

export const AddCardButton = () => {
    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);

    const onClick = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false)
    }

    if (process.env.NODE_ENV === "development") return <AboutButton/> //FIXME should be not equal to before committing

    return (
        <React.Fragment>
            <Button onClick={onClick} variant={"contained"}  color={"inherit"} style={{backgroundColor: "#6573c3"}}><Typography className={classes.title} >Add Paper</Typography></Button>
            <Dialog fullWidth={true} maxWidth="lg" onClose={onClose} open={open} >
                <CardForm handleClose={onClose}/>
            </Dialog>
    </React.Fragment> )


}
