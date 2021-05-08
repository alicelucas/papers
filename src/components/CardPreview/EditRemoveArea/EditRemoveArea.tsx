import React, {useState} from "react"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import useStyles from "../CardPreview.css";
import {cardsSlice} from "../../../store/cardsSlice";
import {useDispatch} from "react-redux";
import {RemoveDialog} from "./RemoveDialog/RemoveDialog";

type EditRemoveAreaProps = {
    id: string,
}

export const EditRemoveArea = ( {id }: EditRemoveAreaProps) => {
    const classes = useStyles();

    const [openRemoveDialogBox, setOpenRemoveDialogBox] = useState<boolean>(false);

    const onRemoveDialogBoxClose = () => {
        setOpenRemoveDialogBox(false)
    }
    const dispatch = useDispatch();
    
    const onRemoveButtonClick = () => {
        dispatch(cardsSlice.actions.setSelectedCard({id: id}));
        setOpenRemoveDialogBox(true);
    }

    return  <Container className={classes.editAreaContainer}>
        <Button onClick={onRemoveButtonClick} size="small" >
            <DeleteOutlinedIcon className={classes.editIcon}/>
        </Button>
        <RemoveDialog onClose={onRemoveDialogBoxClose} open={openRemoveDialogBox}/>
        <Button onClick={() =>{console.info("clicking")}} size="small" >
            <EditOutlinedIcon className={classes.editIcon}/>
        </Button>
    </Container>
}