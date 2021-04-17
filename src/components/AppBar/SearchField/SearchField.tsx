import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React, {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {cardsSelector} from "../../../store/cardsSlice";
import {useStyles} from "../AppBar.css";

export const SearchField = () => {
    const classes = useStyles();

    const cards = useSelector(cardsSelector);

    const handleSearch = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const query = event.target.value;
        // const ids = _.map(cards, (card: Card) => {
        //     return ()
        // })

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