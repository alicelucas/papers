import Button from "@material-ui/core/Button";
import {Dialog} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import React from "react";

type RemoveCardButtonProps = {
    handleRemoveCard: () => void;
}

export const RemoveCardButton = ( { handleRemoveCard }: RemoveCardButtonProps) => {
    const [openWarningBox, setOpenWarningBox] = React.useState(false);

    const handleClickOpenWarningBox = () => {
        setOpenWarningBox(true);
    };

    const handleCloseWarningBox = () => {
        setOpenWarningBox(false);
    };

    const handleRemoveCardButtonClick = () => {
        handleRemoveCard();
        handleCloseWarningBox();
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpenWarningBox} size="small">Remove card</Button>
            <Dialog open={openWarningBox} onClose={handleCloseWarningBox} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Remove card?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Remove card?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseWarningBox}>
                        Cancel
                    </Button>
                    <Button onClick={handleRemoveCardButtonClick}>
                        Remove card
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
};