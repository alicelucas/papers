import {Dialog} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React from "react";
import {useSelector} from "react-redux";
import {selectedCardSelector} from "../../../../store/cardsSlice";
import useStyles from "../../CardPreview.css";

type RemoveDialogProps = {
    open: boolean,
    onClose: () => void;
}

export const RemoveDialog = ( {open, onClose}: RemoveDialogProps) => {
    const classes = useStyles();

    const selectedCard = useSelector(selectedCardSelector);

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you would like to remove the paper "{selectedCard?.title}"? It will be permanently deleted.
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.removeDialogBox}>
                <Button onClick={onClose} color="primary" autoFocus>
                    Cancel
                </Button>
                <Button onClick={onClose} color="primary">
                    Remove
                </Button>
            </DialogActions>
        </Dialog>
    )
}