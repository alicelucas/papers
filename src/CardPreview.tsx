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

type CardPreviewsProps = {
    date: string,
    title: string,
    authors: string,
    journal: string
    id: string,
    refreshCards: () => void
    sections?: {
        why: string,
        what?: string,
        how?: string,
        results?: string,
    }
}

export default function CardPreview({authors, date, journal, id, refreshCards, title, sections}: CardPreviewsProps) {
    const classes = useStyles();

    const handleRemoveCard = () => {
        const url = "http://127.0.0.1:8000/removeCard/".concat(id)
        axios.delete(url).then(
            (response) => {
                refreshCards();
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
        <Grid key={id} item xs={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {journal + ", " + date}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {authors}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={onClick} size="small">Learn More</Button>
                    <CardAccordionDialog handleClose={handleCardAccordionDialogClose} open={openCardAccordionDialog} sections={sections}/>
                    <RemoveCardButton handleRemoveCard={handleRemoveCard}/>
                </CardActions>
            </Card>
        </Grid>

    );
}