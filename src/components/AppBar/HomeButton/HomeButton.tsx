import React from "react"
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../AppBar/AppBar.css";
import {Button} from "@material-ui/core";
import {appSlice} from "../../../store/appSlice";
import {useDispatch, useSelector} from "react-redux";
import {cardsSelector, cardsSlice, visibleCardsIdsSelector} from "../../../store/cardsSlice";
import {Card} from "../../../types/Card";
import Chip from "@material-ui/core/Chip";

export const HomeButton = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const visibleCardsIds = useSelector(visibleCardsIdsSelector);
    const cards = useSelector(cardsSelector);

    const onHomeButtonClick = () => {
        dispatch(appSlice.actions.setSearchTerm({searchTerm: ""}))
        //gather all ids and set them all to visible
        const ids = cards.map((card: Card) => {
            return (card.id);
        });
        dispatch(cardsSlice.actions.setVisibleCardIds({visibleCardsIds: ids}))
    }

    return (<React.Fragment>
            <Button className={classes.homeButton} onClick={onHomeButtonClick}>
                <Typography className={classes.title} variant="h5" noWrap>
                    Paper Stories
                </Typography>
            </Button>
        {visibleCardsIds.length > 0 && <Chip color={"primary"} size={"medium"} className={classes.chip} label={visibleCardsIds.length} />}
    </React.Fragment>
      )
}