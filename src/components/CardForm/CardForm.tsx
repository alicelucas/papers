import React, {useEffect, useState} from "react";
import {CardContent} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {useStyles} from "./CardForm.css";
import {Card as CardType} from "../../types/Card"
import Card from "@material-ui/core/Card";
import * as uuid from "uuid"
import {useDispatch, useSelector} from "react-redux";
import {cardsSlice, selectedCardIdSelector, selectedCardSelector} from "../../store/cardsSlice";
import axios from "axios";
import sectionTitles from "../../types/SectionTitles";

type NewCardFormProps = {
    handleClose: () => void;
}

export const CardForm = ({handleClose} : NewCardFormProps) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const selectedCard = useSelector(selectedCardSelector);
    const selectedCardId = useSelector(selectedCardIdSelector);

    const [newCard, setNewCard] = useState<CardType>({title: "", authors: "", date: "", journal: "", _id: "", labels: [],
        sections: {
            why: "",
            what: "",
            how: "",
            results: "",
        }});

    useEffect(() => {
        if (selectedCardId) {
            setNewCard({title: selectedCard.title, authors: selectedCard.authors, date: selectedCard.date, journal: selectedCard.journal, _id: selectedCard._id, labels: selectedCard.labels,
                sections: {
                    why: selectedCard.sections.why,
                    what: selectedCard.sections.what,
                    how: selectedCard.sections.how,
                    results: selectedCard.sections.results,
                }})
        }
        else {
            console.info("HEre")
            setNewCard({title: "", authors: "", date: "", journal: "", _id: "", labels: [],
                sections: {
                    why: "",
                    what: "",
                    how: "",
                    results: "",
                }})
        }
    }, [selectedCardId])

    // const [newCard, setNewCard] = useState<CardType>(defaultField);

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
        setNewCard({...newCard, _id: uuid.v4()}); //generate new uuid if completely new card
        dispatch(cardsSlice.actions.addCard({card: newCard}));
        dispatch(cardsSlice.actions.addVisibleCardId({visibleCardId: newCard._id}));
        axios.post("http://127.0.0.1:8000/addCard", newCard);
        handleClose();
    }

    const handleEditCard = () => {
        console.info(newCard)
        axios.post("http://127.0.0.1:8000/updateCard", newCard);
        handleClose();
    }

    const buttonText = selectedCardId ? "Edit card" : "Add card";

    return (
            <Card className={classes.root}>
                <CardContent>
                    <form noValidate autoComplete="off">
                        <div className={classes.textField}>
                            <TextField fullWidth label="Title" name="title" variant="filled" defaultValue={newCard.title} onChange={handleTextChange} multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Authors"  variant="filled"  defaultValue={newCard.authors} onChange={handleTextChange}  name="authors" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Journal" name="journal"  variant="filled"  defaultValue={newCard.journal} onChange={handleTextChange} multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Date" name="date" variant="filled"   defaultValue={newCard.date} onChange={handleTextChange} multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label={sectionTitles[0]} variant="filled"  defaultValue={newCard.sections.why} onChange={handleTextChange}  name="why" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label={sectionTitles[1]} variant="filled" defaultValue={newCard.sections.what} onChange={handleTextChange}  name="what" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label={sectionTitles[2]} variant="filled"  defaultValue={newCard.sections.how} onChange={handleTextChange}  name="how" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label={sectionTitles[3]} variant="filled"  defaultValue={newCard.sections.results} onChange={handleTextChange}  name="results" multiline />
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="What are the labels (separate by comma)?" variant="filled"  defaultValue={newCard.labels} onChange={handleTextChange}  name="labels" multiline />
                        </div>
                    </form>
                    <Box paddingTop={1}>
                        <Button variant="outlined" onClick={selectedCardId ? handleEditCard : handleAddCard}>{buttonText}</Button>
                    </Box>

                </CardContent>
            </Card>
    )
}

export default CardForm;