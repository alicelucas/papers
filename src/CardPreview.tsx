import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "./Card.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {RemoveCardButton} from "./RemoveCardButton";
import {CardAccordionDialog} from "./CardAccordionDialog";
import {CardPreview as CardPreviewType} from "./types/CardPreview";
import {useDispatch} from "react-redux";
import {cardsSlice} from "./store/slice";

type CardPreviewsProps = {
    card: CardPreviewType
}

export default function CardPreview({card}: CardPreviewsProps) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleRemoveCard = () => {
        const url = "http://127.0.0.1:8000/removeCard/".concat(card._id)
        axios.delete(url).then(
            (response) => {
                dispatch(cardsSlice.actions.removeCard({id: card._id} ))
            }
        )
    }

    const [openCardAccordionDialog, setOpenCardAccordionDialog] = React.useState<boolean>(false)

    const onClick = () => {
        setOpenCardAccordionDialog(true)
    }

    const handleCardAccordionDialogClose = () => {
        setOpenCardAccordionDialog(false)
    }


    return (
        <Grid key={card._id} item xs={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {[card.journal, card.date].join(", ")}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {card.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {card.authors}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={onClick} size="small">Learn More</Button>
                    <CardAccordionDialog card={card} handleClose={handleCardAccordionDialogClose} open={openCardAccordionDialog}/>
                    <RemoveCardButton handleRemoveCard={handleRemoveCard}/>
                </CardActions>
            </Card>
        </Grid>

    );
}