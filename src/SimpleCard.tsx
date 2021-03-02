import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "./Card.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

type simpleCardsProps = {
    title: string,
    authors: string,
    summary: string
    id: string,
}

export default function SimpleCard({title, authors, summary, id}: simpleCardsProps) {
    const classes = useStyles();

    const handleRemoveCard = () => {
        const url = "http://127.0.0.1:8000/removeCard/".concat(id)
        axios.delete(url).then(
            (response) => {
                console.info(response)
            }
        )
    }

    return (
        <Grid key={id} item xs={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {authors}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {authors}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {summary}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                    <Button onClick={handleRemoveCard} size="small">Remove card</Button>
                </CardActions>
            </Card>
        </Grid>

    );
}