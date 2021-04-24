import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cardsSelector, cardsSlice} from "../../../store/cardsSlice";
import {useStyles} from "../AppBar/AppBar.css";
import {Card} from "../../../types/Card";
import * as _ from "lodash"
import {appSlice, searchTermSelector} from "../../../store/appSlice";

export const SearchField = () => {
    const classes = useStyles();

    const cards = useSelector(cardsSelector);

    const searchTerm = useSelector(searchTermSelector);

    const dispatch = useDispatch();

    const handleSearch = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const query = event.target.value;
        dispatch(appSlice.actions.setSearchTerm({searchTerm: query}))
        const cardsIds: Array<string> = [];
        const labelIndexLocation = query.indexOf("label:");
        let labelTerm = "";
        if (labelIndexLocation !== -1) {
            labelTerm = query.slice(labelIndexLocation+6);
        }
        _.forEach(cards, (card: Card) =>
        {
            if ((card.title).toLowerCase().indexOf(query.toLowerCase()) > -1 || (card.authors).toLowerCase().indexOf(query.toLowerCase()) > -1) {
                cardsIds.push(card._id)
            }
            if (labelIndexLocation !== -1 && labelTerm && (card.labels).map((label: string) => label.toLowerCase()).includes(labelTerm)) {
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
                value={searchTerm}
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