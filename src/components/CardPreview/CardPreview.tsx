import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from "../../Card.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {CardAccordionDialog} from "../CardAccordion/CardAccordionDialog";
import {Card as CardPreviewType} from "../../types/Card";
import {useDispatch, useSelector} from "react-redux";
import {cardsSlice, updatedCardContentSelector} from "../../store/slice";
import {Section} from "../../types/Section";
import {CardActionArea} from "@material-ui/core";

type CardPreviewsProps = {
    card: CardPreviewType
}

export default function CardPreview({card}: CardPreviewsProps) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const updatedCard = useSelector(updatedCardContentSelector);

    const handleRemoveCard = () => {
        const url = "http://127.0.0.1:8000/removeCard/".concat(card._id)
        axios.delete(url).then(
            (response) => {
                dispatch(cardsSlice.actions.removeCard({id: card._id} ))
            }
        )
    }

    const [openCardAccordionDialog, setOpenCardAccordionDialog] = React.useState<boolean>(false)

    const onCardClick = () => {
        setOpenCardAccordionDialog(true);
        dispatch(cardsSlice.actions.setSelectedCard({id: card._id}))
        dispatch(cardsSlice.actions.setSelectedSection({section: Section.Why}))
    }

    const handleCardAccordionDialogClose = () => {
        setOpenCardAccordionDialog(false);
        if (!updatedCard) return;
        axios.post("http://127.0.0.1:8000/replaceCard", updatedCard).then( (response) => {
            dispatch(cardsSlice.actions.replaceSelectedCard({card: updatedCard}));
        });
    }

    return (
        <React.Fragment>
            <Grid key={card._id} item xs={4}>
                <Card className={classes.root} onClick={onCardClick}>
                    <CardActionArea className={classes.media}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {[card.journal, card.date].join(", ")}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                {card.title}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {card.authors}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/*<RemoveCardButton handleRemoveCard={handleRemoveCard}/>*/}
                </Card>
            </Grid>
            <CardAccordionDialog card={card} handleClose={handleCardAccordionDialogClose} open={openCardAccordionDialog}/>
        </React.Fragment>



    );
}