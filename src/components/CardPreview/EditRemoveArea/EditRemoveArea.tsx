import React, {useState} from "react"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import useStyles from "../CardPreview.css";
import {Dialog} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

export const EditRemoveArea = () => {
    const classes = useStyles();

    const [openRemoveDialogBox, setOpenRemoveDialogBox] = useState<boolean>(false);

    const onRemoveDialogBoxClose = () => {
        setOpenRemoveDialogBox(false)
    }

    const onRemoveButtonClick = () => {
        setOpenRemoveDialogBox(true);
    }

    return  <Container className={classes.editAreaContainer}>
        <Button onClick={onRemoveButtonClick} size="small" >
            <DeleteOutlinedIcon className={classes.editIcon}/>
        </Button>
        <Dialog open={openRemoveDialogBox} onClose={onRemoveDialogBoxClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you would like to remove this card? It will be permanently deleted.
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.removeDialogBox}>
                <Button onClick={onRemoveDialogBoxClose} color="primary" autoFocus>
                    Cancel
                </Button>
                <Button onClick={onRemoveDialogBoxClose} color="primary">
                    Remove
                </Button>
            </DialogActions>
        </Dialog>
        <Button onClick={() =>{console.info("clicking")}} size="small" >
            <EditOutlinedIcon className={classes.editIcon}/>
        </Button>
    </Container>
}