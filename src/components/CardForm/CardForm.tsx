import React, {useState} from "react";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import useStyles from "./CardForm.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Card as CardType} from "../../types/Card";
import axios from "axios";
import {useDispatch} from "react-redux";
import {cardsSlice} from "../../store/slice";

type NewCardFormProps = {
    handleClose: () => void;
}

const CardForm = ({handleClose} : NewCardFormProps) => {
    const classes = useStyles();

    const [newCard, setNewCard] = useState<CardType>({title: "", authors: "", date: "", journal: "", _id: "",
        sections: {
            why: "",
            what: "",
            how: "",
            results: "",
        }});

    const dispatch = useDispatch();

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "what" || event.target.name === "why" || event.target.name === "how" || event.target.name === "results") {
            const newSections = {...newCard.sections, [event.target.name]: event.target.value};
            setNewCard({...newCard, sections: newSections});
        } else {
            setNewCard({...newCard, [event.target.name]: event.target.value})
        }
    }

    const handleAddCard = async () => {
        axios.post("http://127.0.0.1:8000/addCard", newCard).then( (response) => {
            dispatch(cardsSlice.actions.addCard({card: {...newCard, _id: response.data.id} } ))
        }).catch( (error) => console.info(error));
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
                        <TextField fullWidth label="Why is this work important?" variant="filled"  onChange={handleTextChange}  name="why" multiline rows={4}/>
                    </div>
                    <div className={classes.textField}>
                        <TextField fullWidth label="What do they propose?" variant="filled"  onChange={handleTextChange}  name="what" multiline rows={4}/>
                    </div>
                    <div className={classes.textField}>
                        <TextField fullWidth label="How does it work?" variant="filled"  onChange={handleTextChange}  name="how" multiline rows={4}/>
                    </div>
                    <div className={classes.textField}>
                        <TextField fullWidth label="What are the results?" variant="filled"  onChange={handleTextChange}  name="results" multiline rows={4}/>
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
