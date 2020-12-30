import React from "react";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import useStyles from "./Card.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {useDispatch} from "react-redux";
import {cardsSlice} from "./store/slices/cardsSlice";
import {Card as CardType} from "./types/Card";

const NewCardForm = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const handleClick = () => {
        //create new card object
        const newCard: CardType = {
            title: "new title",
            authors: "new string",
            summary: "new summary",
            id: "new id"
        }
        dispatch(cardsSlice.actions.createCard({card: newCard}))
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField id="standard-basic" label="Title"/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Authors" />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Summary" multiline rows={4} />
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
