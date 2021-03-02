import React, {useState} from "react";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import useStyles from "./Card.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {CardPreview} from "./types/CardPreview";
import axios from "axios";

type NewCardFormProps = {
    refreshCards: () => void;
    handleClose: () => void;
}

const NewCardForm = ( {refreshCards, handleClose} : NewCardFormProps) => {
    const classes = useStyles();

    const [cardContent, setCardContent] = useState<{title: string, authors: string, summary: string}>({title: "", authors: "", summary: ""})

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCardContent({...cardContent, [event.target.name]: event.target.value})
    }

    const handleAddCard = async () => {
        //create new card object
        const newCard: CardPreview = {
            title: cardContent.title,
            authors: cardContent.authors,
            summary: cardContent.summary
        }

        axios.post("http://127.0.0.1:8000/addCard", newCard).then( (response) => {
            refreshCards();
        }).catch( (error) => console.info(error));
        handleClose();
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField id="standard-basic" label="Title" name="title" onChange={handleTextChange}/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Authors" name="authors" onChange={handleTextChange}/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Summary" onChange={handleTextChange}  name="summary" multiline rows={4}/>
                    </div>
                </form>
                <Box paddingTop={1}>
                    <Button variant="outlined" onClick={handleAddCard}>Add card</Button>
                </Box>

            </CardContent>
        </Card>
    )
}

export default NewCardForm;
