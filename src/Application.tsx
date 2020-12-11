import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import {useSelector} from "react-redux";
import {selectAllCards} from "./store/selectors/cardSelector";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function PaperGrid() {
    const classes = useStyles();

    const allCards = useSelector(selectAllCards)
    console.log(allCards.cards)

    const firstCardProps = {
        title: allCards.cards.cards[0].title,
        authors: allCards.cards.cards[0]?.authors,
        summary: allCards.cards.cards[0]?.summary
    }

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <SimpleCard {...firstCardProps}/>
                </Grid>
                <Grid item xs={4}>
                    <SimpleCard {...firstCardProps}/>
                </Grid>
                <Grid item xs={4}>
                    <SimpleCard {...firstCardProps}/>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}