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

    const [defaultField, setDefaultField] = useState<CardType>({title: "", authors: "", date: "", journal: "", _id: "", labels: [],
        sections: {
            why: "",
            what: "",
            how: "",
            results: "",
        }});

    useEffect(() => {
        if (selectedCardId) {
            setDefaultField({title: selectedCard.title, authors: selectedCard.authors, date: selectedCard.date, journal: selectedCard.journal, _id: selectedCard._id, labels: selectedCard.labels,
                sections: {
                    why: selectedCard.sections.why,
                    what: selectedCard.sections.what,
                    how: selectedCard.sections.how,
                    results: selectedCard.sections.results,
                }})
        }
        else {
            console.info("HEre")
            setDefaultField({title: "", authors: "", date: "", journal: "", _id: "", labels: [],
                sections: {
                    why: "",
                    what: "",
                    how: "",
                    results: "",
                }})
        }
    }, [selectedCardId])

    const [newCard, setNewCard] = useState<CardType>(defaultField);

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

    const buttonText = selectedCardId ? "Edit card" : "Add card";

    return (
            <Card className={classes.root}>
                <CardContent>
                    <form noValidate autoComplete="off">
                        <div className={classes.textField}>
                            <TextField fullWidth label="Title" name="title" variant="filled" defaultValue={defaultField.title} onChange={handleTextChange} multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Authors"  variant="filled"  defaultValue={defaultField.authors} onChange={handleTextChange}  name="authors" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Journal" name="journal"  variant="filled"  defaultValue={defaultField.journal} onChange={handleTextChange} multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Date" name="date" variant="filled"   defaultValue={defaultField.date} onChange={handleTextChange} multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label={sectionTitles[0]} variant="filled"  defaultValue={defaultField.sections.why} onChange={handleTextChange}  name="why" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label={sectionTitles[1]} variant="filled" defaultValue={defaultField.sections.what} onChange={handleTextChange}  name="what" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label={sectionTitles[2]} variant="filled"  defaultValue={defaultField.sections.how} onChange={handleTextChange}  name="how" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label={sectionTitles[3]} variant="filled"  defaultValue={defaultField.sections.results} onChange={handleTextChange}  name="results" multiline />
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="What are the labels (separate by comma)?" variant="filled"  defaultValue={defaultField.labels} onChange={handleTextChange}  name="labels" multiline />
                        </div>
                    </form>
                    <Box paddingTop={1}>
                        <Button variant="outlined" onClick={handleAddCard}>{buttonText}</Button>
                    </Box>

                </CardContent>
            </Card>
    )
}

export default CardForm;