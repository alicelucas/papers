import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cardsSelector, cardsSlice} from "../../../store/cardsSlice";
import {useStyles} from "../AppBar/AppBar.css";
import {Card} from "../../../types/Card";
import * as _ from "lodash"

export const SearchField = () => {
    const classes = useStyles();

    const cards = useSelector(cardsSelector);

    const dispatch = useDispatch();

    const handleSearch = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const query = event.target.value;
        const cardsIds: Array<string> = [];
        _.forEach(cards, (card: Card) =>
        {
            if ((card.title).toLowerCase().indexOf(query.toLowerCase()) > -1 || (card.authors).toLowerCase().indexOf(query.toLowerCase()) > -1) {
                cardsIds.push(card._id)
            }
        })
        dispatch(cardsSlice.actions.setVisibleCardIds({visibleCardsIds: cardsIds }))
    }

    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
            />
        </div>
    )
}