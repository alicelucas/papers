import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from "./CardPreview.css"
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {Card as CardPreviewType} from "../../types/Card";
import {useDispatch, useSelector} from "react-redux";
import {cardsSlice, updatedCardContentSelector} from "../../store/slice";
import {Section} from "../../types/Section";
import {CardActionArea} from "@material-ui/core";
import OutlinedCard from "../Card/Card"
import Dialog from "@material-ui/core/Dialog";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

type CardPreviewsProps = {
    card: CardPreviewType
}

export default function CardPreview({card}: CardPreviewsProps) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const updatedCard = useSelector(updatedCardContentSelector);

    const [openCardDialog, setOpenCardDialog] = React.useState<boolean>(false)

    const onCardClick = () => {
        setOpenCardDialog(true);
        dispatch(cardsSlice.actions.setSelectedCard({id: card._id}))
        dispatch(cardsSlice.actions.setSelectedSection({section: Section.Why}))
    }

    const onDialogClose = () => {
        setOpenCardDialog(false);
        if (!updatedCard) return;
        axios.post("http://127.0.0.1:8000/replaceCard", updatedCard).then( (response) => {
            dispatch(cardsSlice.actions.replaceSelectedCard({card: updatedCard}));
        });
    }

    return (
        <React.Fragment>
            <Grid key={card._id} item xs={4}>
                <Container className={classes.container}>
                    <Card className={classes.root} >
                        <CardActionArea className={classes.media} onClick={onCardClick}>
                            <CardContent>
                                <Typography className={classes.title} variant="h6" component="h2">
                                    {card.title}
                                </Typography>
                                <Typography className={classes.authors} color="textSecondary">
                                    {card.authors}
                                </Typography>
                                <Typography className={classes.info} color="textSecondary" gutterBottom>
                                    {[card.journal, card.date].join(", ")}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {card.labels.map( (label: string) => {
                            if (label.length) return (
                                <Button  key={label} className={classes.labels} size="small" variant="outlined">
                                    {label}
                                </Button>
                            )
                        })}
                    </Card>
                </Container>
            </Grid>
            <Dialog  classes={{
                paper: classes.dialog
            }} fullWidth={true} maxWidth="lg" onClose={onDialogClose} open={openCardDialog}>
                <OutlinedCard/>
            </Dialog >

        </React.Fragment>



    );
}