import React from 'react';
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
} from "../../store/slice";
import {Section} from "../../types/Section";
import sectionTitles from "../../types/SectionTitles";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    arrows: {
      justifyContent: "space-between"
    },
    body: {
      marginLeft: 20,
        marginRight: 20,
        whiteSpace: 'pre-line'
    },
    edit: {
        float: 'right',
        marginRight: 20
    },
    editIcon: {
        float: 'right',
        color: "#6573c3",
    },
    header: {
      backgroundColor: "#6573c3"
    },
    root: {
        minWidth: 275,
        minHeight: 350,
        overflow: 'auto'
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
        marginTop: -70,
        marginBottom: 24,
        flexGrow: 1,
        textAlign: 'center',
    },
});

export default function OutlinedCard() {
    const classes = useStyles();

    const selectedCard = useSelector(selectedCardSelector);
    const selectedContent = useSelector(selectedSectionContentSelector);
    const selectedSection = useSelector(selectedSectionSelector)

    const dispatch = useDispatch();

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
            <CardHeader className={classes.header} title={selectedCard.title} subheader={[selectedCard.authors, selectedCard.journal, selectedCard.date].join(" ")}/>
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
                    {selectedContent}
                </Typography>
            </CardContent>
            <CardActions className={classes.edit} >
                <EditIcon className={classes.editIcon}/>
            </CardActions>
        </Card>
    );
}