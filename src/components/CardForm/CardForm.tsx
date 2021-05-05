import React, {useState} from "react";
import {CardContent} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {useStyles} from "./CardForm.css";
import {Card as CardType} from "../../types/Card"
import Card from "@material-ui/core/Card";
import * as uuid from "uuid"
import {useDispatch} from "react-redux";
import {cardsSlice} from "../../store/cardsSlice";
import axios from "axios";

type NewCardFormProps = {
    handleClose: () => void;
}

export const CardForm = ({handleClose} : NewCardFormProps) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [newCard, setNewCard] = useState<CardType>({title: "", authors: "", date: "", journal: "", _id: "", labels: [],
        sections: {
            why: "",
            what: "",
            how: "",
            results: "",
        }});

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "what" || event.target.name === "why" || event.target.name === "how" || event.target.name === "results") {
            const newSections = {...newCard.sections, [event.target.name]: event.target.value};
            setNewCard({...newCard, sections: newSections});
        } else if (event.target.name === "labels") {
           setNewCard({...newCard, labels: event.target.value.split(",")});
        }
        else {
            setNewCard({...newCard, [event.target.name]: event.target.value})
        }
    }

    const handleAddCard = () => {
        setNewCard({...newCard, _id: uuid.v4()});
        dispatch(cardsSlice.actions.addCard({card: newCard}));
        dispatch(cardsSlice.actions.addVisibleCardId({visibleCardId: newCard._id}));
        axios.post("http://127.0.0.1:8000/addCard", newCard);
        handleClose();
    }

    return (
            <Card className={classes.root}>
                <CardContent>
                    <form noValidate autoComplete="off">
                        <div className={classes.textField}>
                            <TextField fullWidth label="Title" name="title" variant="filled"  onChange={handleTextChange}/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Authors"  variant="filled" onChange={handleTextChange}  name="authors"/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Journal" name="journal" variant="filled" onChange={handleTextChange}/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Date" name="date" variant="filled"  onChange={handleTextChange}/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Why is this work important?" variant="filled"  onChange={handleTextChange}  name="why" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="What do they propose?" variant="filled"  onChange={handleTextChange}  name="what" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="How does it work?" variant="filled"  onChange={handleTextChange}  name="how" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="What are the results?" variant="filled"  onChange={handleTextChange}  name="results" multiline />
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="What are the labels (separate by comma)?" variant="filled"  onChange={handleTextChange}  name="labels" multiline />
                        </div>
                    </form>
                    <Box paddingTop={1}>
                        <Button variant="outlined" onClick={handleAddCard}>Add card</Button>
                    </Box>

                </CardContent>
            </Card>
    )
}

export default CardForm;