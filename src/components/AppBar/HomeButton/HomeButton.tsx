import React from "react"
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../AppBar/AppBar.css";
import {Button} from "@material-ui/core";
import {appSlice} from "../../../store/appSlice";
import {useDispatch, useSelector} from "react-redux";
import {cardsSelector, cardsSlice} from "../../../store/cardsSlice";
import {Card} from "../../../types/Card";

export const HomeButton = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const cards = useSelector(cardsSelector);

    const onHomeButtonClick = () => {
        dispatch(appSlice.actions.setSearchTerm({searchTerm: ""}))
        //gather all ids and set them all to visible
        const ids = cards.map((card: Card) => {
            return (card.id);
        });
        dispatch(cardsSlice.actions.setVisibleCardIds({visibleCardsIds: ids}))
    }

    return (<Button className={classes.homeButton} onClick={onHomeButtonClick}>
            <Typography className={classes.title} variant="h6" noWrap>
                Paper Stories
            </Typography>
    </Button>
      )
}