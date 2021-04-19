import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useDispatch, useSelector} from "react-redux";
import {
    cardsSlice,
    selectedCardSelector,
    selectedSectionContentSelector,
    selectedSectionSelector
} from "../../store/cardsSlice";
import {Section} from "../../types/Section";
import sectionTitles from "../../types/SectionTitles";
import {useStyles} from "./Card.css";

export default function CardDialog() {
    const classes = useStyles();

    const selectedCard = useSelector(selectedCardSelector);
    const selectedContent = useSelector(selectedSectionContentSelector);
    const selectedSection = useSelector(selectedSectionSelector)

    const dispatch = useDispatch();

    const content = Object.values(selectedCard.sections)

    if (!selectedCard || !selectedContent) return <React.Fragment/>;

    const onNextSectionClick = () => {
        if (selectedSection + 1 === 4) return;
        else {
            dispatch(cardsSlice.actions.setSelectedSection({section: (selectedSection + 1) as Section}));
        }
    };

    const onPreviousSectionClick = () => {
        if (selectedSection - 1 === -1) return;
        else {
            dispatch(cardsSlice.actions.setSelectedSection({section: (selectedSection - 1) as Section}))
        }
    };

    const BackButton = () => {
        if (selectedSection === 0) return (
            <IconButton disabled className={classes.icon} onClick={onPreviousSectionClick}>
                <ArrowBackIcon fontSize={"large"}/>
            </IconButton>
        )
        else {
            return (
                <IconButton className={classes.icon} onClick={onPreviousSectionClick}>
                <ArrowBackIcon fontSize={"large"}/>
             </IconButton>)
        }
    }

    const ForwardButton = () => {
        if (selectedSection === 3) return (
            <IconButton disabled className={classes.icon} onClick={onNextSectionClick}>
                <ArrowForwardIcon fontSize={"large"}/>
            </IconButton>
        )
        else {
            return (
                <IconButton className={classes.icon} onClick={onNextSectionClick}>
                    <ArrowForwardIcon fontSize={"large"}/>
                </IconButton>)
        }
    }

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
                    {content[selectedSection]}
                </Typography>
            </CardContent>
        </Card>
    );
}