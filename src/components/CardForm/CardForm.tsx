import React, {useState} from "react";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../Card.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {CardPreview} from "../../types/CardPreview";
import axios from "axios";
import {useDispatch} from "react-redux";
import {cardsSlice} from "../../store/slice";

type NewCardFormProps = {
    handleClose: () => void;
}

const CardForm = ({handleClose} : NewCardFormProps) => {
    const classes = useStyles();

    const [newCard, setNewCard] = useState<CardPreview>({title: "", authors: "", date: "", journal: "", _id: "",
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
                    <div>
                        <TextField fullWidth id="standard-basic" label="Journal" name="journal" onChange={handleTextChange}/>
                    </div>
                    <div>
                        <TextField fullWidth id="standard-basic" label="Date" name="date" onChange={handleTextChange}/>
                    </div>
                    <div>
                        <TextField fullWidth id="standard-basic" label="Title" name="title" onChange={handleTextChange}/>
                    </div>
                    <div>
                        <TextField fullWidth id="standard-basic" label="Authors" onChange={handleTextChange}  name="authors"/>
                    </div>
                    <div>
                        <TextField fullWidth id="standard-basic" label="Why is this work important?" onChange={handleTextChange}  name="why" multiline rows={4}/>
                    </div>
                    <div>
                        <TextField fullWidth id="standard-basic" label="What do they propose?" onChange={handleTextChange}  name="what" multiline rows={4}/>
                    </div>
                    <div>
                        <TextField fullWidth id="standard-basic" label="How does it work?" onChange={handleTextChange}  name="how" multiline rows={4}/>
                    </div>
                    <div>
                        <TextField fullWidth id="standard-basic" label="What are the results" onChange={handleTextChange}  name="results" multiline rows={4}/>
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
