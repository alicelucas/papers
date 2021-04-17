import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
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

const useStyles = makeStyles({
    arrows: {
      justifyContent: "space-between"
    },
    body: {
      marginLeft: 20,
        marginRight: 20,
        whiteSpace: 'pre-line'
    },
    header: {
      backgroundColor: "#6573c3",
        color: "white",
        whiteSpace: 'pre-line'
    },
    root: {
        minWidth: 275,
        minHeight: 350,
        overflow: 'auto',

    },
    icon: {
        color: "#6573c3",
        marginRight: "10px",
        marginLeft: "10px"
    },
    text: {
        // padding: "28 px",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginTop: -70,
        marginBottom: 24,
        flexGrow: 1,
        textAlign: 'center',
    },
});

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


    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader align="center" className={classes.header} title={selectedCard.title} subheader={<Typography>{[selectedCard.authors, "\n", selectedCard.journal, selectedCard.date].join(" ")}</Typography>}/>
            <CardActions className={classes.arrows}>
                <IconButton className={classes.icon} onClick={onPreviousSectionClick}>
                    <ArrowBackIcon fontSize={"large"}/>
                </IconButton>
                <IconButton className={classes.icon} onClick={onNextSectionClick}>
                    <ArrowForwardIcon fontSize={"large"}/>
                </IconButton>
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