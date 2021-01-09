import React, {useState} from "react";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import useStyles from "./Card.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {useDispatch, useSelector} from "react-redux";
import {cardsSlice} from "./store/slices/cardsSlice";
import {Card as CardType} from "./types/Card";
import {selectAllCards} from "./store/selectors/cardSelector";

const NewCardForm = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const allCards = useSelector(selectAllCards);

    const [cardContent, setCardContent] = useState<{title: string, authors: string, summary: string}>({title: "", authors: "", summary: ""})

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCardContent({...cardContent, [event.target.name]: event.target.value})
        console.log(cardContent)
    }

    const handleClick = () => {
        //create new card object
        const newCard: CardType = {
            title: cardContent.title,
            authors: cardContent.authors,
            summary: cardContent.summary,
            id: "new id"
        }
        dispatch(cardsSlice.actions.createCard({card: newCard}))
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
                    <Button variant="outlined" onClick={handleClick}>Add card</Button>
                </Box>

            </CardContent>
        </Card>
    )
}

export default NewCardForm;
