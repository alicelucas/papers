import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {selectAllCards} from "./store/selectors/cardSelector";
import {addNewCard, fetchCards} from "./store/slices/cardsSlice";
import {Cards} from "./types/Cards";
import * as _ from "lodash"


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

    const dispatch = useDispatch()

    const allCards = useSelector(selectAllCards);
    const cardStatus = useSelector( (state: {cards: Cards, status: string, error: any}) => state.status)

    useEffect( () => {
        const foo = async () => {
            const resultAction = await dispatch(fetchCards)
        }
        foo();
    }, [cardStatus, dispatch] )

    const cardsPerRow = 3; // number of cards you'd like to see in a row

    const FormGrid = () => {
        const cardIndices: Array<Array<number>> = _.chunk([...Array(allCards.length).keys()], cardsPerRow);

        const rows = cardIndices.map( (cardIdxs) =>
             <Grid key={allCards[0].id} container item xs={12} spacing={3}>
                    { cardIdxs.map( (cardIndex: number) => <SimpleCard title={allCards[cardIndex].title}
                                                                          authors={allCards[cardIndex].authors}
                                                                          summary={allCards[cardIndex].summary}
                                                                          id={allCards[cardIndex].id}/>)}
                </Grid>

        )

        return <>{rows}</>
    }

    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <FormGrid/>
                </Grid>
            </div>
    )

}