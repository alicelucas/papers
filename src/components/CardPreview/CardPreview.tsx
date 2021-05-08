import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from "./CardPreview.css"
import Grid from "@material-ui/core/Grid";
import {Card as CardType} from "../../types/Card";
import {useDispatch} from "react-redux";
import {cardsSlice} from "../../store/cardsSlice";
import {Section} from "../../types/Section";
import {CardActionArea} from "@material-ui/core";
import CardDialog from "../Card/Card"
import Dialog from "@material-ui/core/Dialog";
import Container from "@material-ui/core/Container";
import {Labels} from "./Labels/Labels";
import {EditRemoveArea} from "./EditRemoveArea/EditRemoveArea";

type CardPreviewsProps = {
    card: CardType
}

export default function CardPreview({card}: CardPreviewsProps) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [openCardDialog, setOpenCardDialog] = React.useState<boolean>(false)

    const onCardTitleClick = () => {
        setOpenCardDialog(true);
        dispatch(cardsSlice.actions.setSelectedCard({id: card._id}))
        dispatch(cardsSlice.actions.setSelectedSection({section: Section.Why}))
    }

    const onDialogClose = () => {
        setOpenCardDialog(false);
    }

    return (
        <React.Fragment>
            <Grid key={card._id} item xs={4}>
                <Container className={classes.container}>
                    <Card variant="outlined" className={classes.root} >
                    <Labels card={card}/>
                    <CardActionArea onClick={onCardTitleClick}>
                        <CardContent>
                            <Typography className={classes.title} align="center" variant="h6" component="h2">
                                {card.title}
                            </Typography>
                            <Typography className={classes.authors} align="center" color="textSecondary">
                                {card.authors}
                            </Typography>
                            <Typography className={classes.info} align="center" color="textSecondary" gutterBottom>
                                {[card.journal, card.date].join(", ")}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <EditRemoveArea id={card._id}/>

                    </Card>
                </Container>
            </Grid>
            <Dialog  classes={{
                paper: classes.dialog
            }} fullWidth={true} maxWidth="lg" onClose={onDialogClose} open={openCardDialog}>
                <CardDialog/>
            </Dialog >

        </React.Fragment>



    );
}