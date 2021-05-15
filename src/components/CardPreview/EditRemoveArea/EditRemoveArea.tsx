import React, {useState} from "react"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import useStyles from "../CardPreview.css";
import {cardsSlice} from "../../../store/cardsSlice";
import {useDispatch} from "react-redux";
import {RemoveDialog} from "./RemoveDialog/RemoveDialog";
import Dialog from "@material-ui/core/Dialog";
import CardForm from "../../CardForm/CardForm";

type EditRemoveAreaProps = {
    id: string,
}

export const EditRemoveArea = ( {id }: EditRemoveAreaProps) => {
    const classes = useStyles();

    const [openRemoveDialogBox, setOpenRemoveDialogBox] = useState<boolean>(false);
    const [openEditCardForm, setOpenEditCardForm] = useState<boolean>(false);


    const onRemoveDialogBoxClose = () => {
        setOpenRemoveDialogBox(false);
        dispatch(cardsSlice.actions.setSelectedCard({id: ""}));
    }

    const onEditCardFormClose = () => {
        setOpenEditCardForm(false);
        dispatch(cardsSlice.actions.setSelectedCard({id: ""}));
    }
    const dispatch = useDispatch();
    
    const onRemoveButtonClick = () => {
        dispatch(cardsSlice.actions.setSelectedCard({id: id}));
        setOpenRemoveDialogBox(true);
    }

    const onEditButtonClick = () => {
        dispatch(cardsSlice.actions.setSelectedCard({id: id}));
        setOpenEditCardForm(true);
    }

    return  <Container className={classes.editAreaContainer}>
        <Button onClick={onRemoveButtonClick} size="small" >
            <DeleteOutlinedIcon className={classes.editIcon}/>
        </Button>
        <RemoveDialog onClose={onRemoveDialogBoxClose} open={openRemoveDialogBox}/>
        <Button onClick={onEditButtonClick} size="small" >
            <EditOutlinedIcon className={classes.editIcon}/>
        </Button>
        <Dialog fullWidth={true} maxWidth="lg" onClose={onEditCardFormClose} open={openEditCardForm} >
            <CardForm handleClose={onEditCardFormClose}/>
        </Dialog>
    </Container>
}