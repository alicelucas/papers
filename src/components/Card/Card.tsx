import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectedCardSelector, selectedSectionContentSelector, selectedSectionSelector} from "../../store/cardsSlice";
import sectionTitles from "../../types/SectionTitles";
import {useStyles} from "./Card.css";
import {BackButton} from "./BackButton/BackButton";
import {ForwardButton} from "./ForwardButton/ForwardButton";

export default function CardDialog() {
    const classes = useStyles();

    const selectedCard = useSelector(selectedCardSelector);
    const selectedContent = useSelector(selectedSectionContentSelector);
    const selectedSection = useSelector(selectedSectionSelector)

    if (!selectedCard || !selectedContent) return <React.Fragment/>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader align="center" className={classes.header} title={selectedCard.title} subheader={<Typography>{[selectedCard.authors, "\n", selectedCard.journal, selectedCard.date].join(" ")}</Typography>}/>
            <CardActions className={classes.arrows}>
                <BackButton/>
                <ForwardButton/>
            </CardActions>
            <CardContent>
                <Typography className={classes.pos} variant="h6" component="h2">
                    {sectionTitles[selectedSection]}
                </Typography>
                <Typography align={"justify"} className={classes.body} >
                    {selectedContent}
                </Typography>
            </CardContent>
        </Card>
    );
}