import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import React from "react";
import useStyles from "../CardPreview.css";
import {Card} from "../../../types/Card";
import * as _ from "lodash";
import {cardsSelector, cardsSlice} from "../../../store/cardsSlice";
import {useDispatch, useSelector} from "react-redux";
import {appSlice} from "../../../store/appSlice";

type LabelsProps = {
    card: Card
}
export const Labels = ( {card}: LabelsProps) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const cards = useSelector(cardsSelector);

    const onLabelClick = (label: string) => {
        const cardsIds: Array<string> = [];
        _.forEach(cards, (card: Card) =>
        {
            if (card.labels.includes(label)) cardsIds.push(card._id)
        })
        dispatch(cardsSlice.actions.setVisibleCardIds({visibleCardsIds: cardsIds }))
        dispatch(appSlice.actions.setSearchTerm({searchTerm: `label:${label.toLowerCase()}`}))
    }

    return (
        <Container className={classes.labelContainer}>
            {card.labels.map( (label: string, idx: number) => {
                if (label.length) return (
                    <Button key={label} onClick={() => onLabelClick(label)} className={classes.labels} size="small" variant="outlined">
                        {label}
                    </Button>
                )
                else {
                    return <React.Fragment key={idx} />
                }
            })}
        </Container>
    )
}