import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useSelector} from "react-redux";
import {selectedCardSelector} from "../../store/slice";
import {Section} from "../../types/Section";
import sectionTitles from "../../types/SectionTitles";

const useStyles = makeStyles({
    action: {
      justifyContent: "space-between"
    },
    body: {
      marginLeft: 20,
        marginRight: 20,
        whiteSpace: 'pre-line'
    },
    header: {
      backgroundColor: "#6573c3"
    },
    root: {
        minWidth: 275,
    },
    icon: {
        color: "#6573c3",
        marginRight: "10px",
        marginLeft: "10px"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginTop: 6,
        marginBottom: 24,
        flexGrow: 1,
        textAlign: 'center',
    },
});

export default function OutlinedCard() {
    const classes = useStyles();

    const selectedCard = useSelector(selectedCardSelector);

    const [sectionIdx, setSectionIdx] = useState<Section>(Section.Why);

    if (!selectedCard) return <React.Fragment/>;

    const onNextSectionClick = () => {
        if (sectionIdx + 1 === 4) return;
        else setSectionIdx(sectionIdx + 1);
    };

    const onPreviousSectionClick = () => {
        if (sectionIdx - 1 === -1) return;
        else setSectionIdx(sectionIdx - 1);
    };




    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader className={classes.header} title={selectedCard.title} subheader={[selectedCard.authors, selectedCard.journal, selectedCard.date].join(" ")}/>
            <CardContent>
                <Typography className={classes.pos} variant="h6" component="h2">
                    {sectionTitles[sectionIdx]}
                </Typography>
                <Typography align={"justify"} className={classes.body} >
                    {selectedCard.sections.why}
                </Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <IconButton className={classes.icon} onClick={onPreviousSectionClick}>
                    <ArrowBackIcon fontSize={"large"}/>
                </IconButton>
                <IconButton className={classes.icon} onClick={onNextSectionClick}>
                    <ArrowForwardIcon fontSize={"large"}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}