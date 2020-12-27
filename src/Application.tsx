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

    type RowProps = {
        indices: number[]
    }

    const FormRow = ({indices}: RowProps) => {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <SimpleCard title={allCards[indices[0]].title} authors={allCards[indices[0]].authors} summary={allCards[indices[0]].summary}/>
                </Grid>
                <Grid item xs={4}>
                    <SimpleCard title={allCards[indices[1]].title} authors={allCards[indices[1]].authors} summary={allCards[indices[1]].summary}/>
                </Grid>
                <Grid item xs={4}>
                    <SimpleCard title={allCards[indices[2]].title} authors={allCards[indices[2]].authors} summary={allCards[indices[2]].summary}/>
                </Grid>
            </React.Fragment>
        );
    }

    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow indices={[0,1,2]}/>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow indices={[0,0,0]}/>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow indices={[0,0,0]}/>
                    </Grid>
                </Grid>
            </div>
    )

}