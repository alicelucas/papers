import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {selectAllCards} from "./store/selectors/cardSelector";
import {addNewCard, fetchCards} from "./store/slices/cardsSlice";
import {Cards} from "./types/Cards";


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
        const numRows = Math.ceil(allCards.length / cardsPerRow)
        const rowList: JSX.Element[] = [];

        let rows = 0;
        let cardIdx = 0;
        
        while (rows < numRows) {
            const cardIndices: number[] = []
            for (cardIdx; cardIdx < cardsPerRow * (rows + 1); cardIdx++) {
                if (cardIdx < allCards.length) {
                    cardIndices.push(cardIdx)
                }
            }
            rowList.push(
                        <Grid key={allCards[cardsPerRow * rows].id} container item xs={12} spacing={3}>
                            <FormRow cardIndices={cardIndices}/>
                        </Grid>
            )
            rows++;
            cardIdx = cardsPerRow * rows
        }
        return <>{rowList}</>
        }

    type RowProps = {
        cardIndices: number[],
    }

    const FormRow = ({cardIndices}: RowProps) => {
        return (
            <React.Fragment>
                {
                    cardIndices.map( (cardIndex: number) => {return (
                        <Grid key={allCards[cardIndex].id} item xs={4}>
                            <SimpleCard title={allCards[cardIndex].card.title} authors={allCards[cardIndex].card.authors} summary={allCards[cardIndex].card.summary}/>
                        </Grid>
                    )} )
                }
            </React.Fragment>
        );
    }

    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <FormGrid/>
                </Grid>
            </div>
    )

}