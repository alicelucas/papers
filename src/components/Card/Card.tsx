import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardHeader, TextField} from "@material-ui/core";
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
import {Card as CardType} from "../../types/Card";

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
        position: 'relative',
        top: 10,
        marginRight: 10
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

export default function OutlinedCard() {
    const classes = useStyles();

    const selectedCard = useSelector(selectedCardSelector);
    const selectedContent = useSelector(selectedSectionContentSelector);
    const selectedSection = useSelector(selectedSectionSelector)

    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [edittedContent, setEdittedContent] = useState<string>(selectedContent);

    const [content, setContent] = useState<Array<string>>(Object.values(selectedCard.sections))

    const onEditClick = () => {
        if (!isEdit) {
            setEdittedContent(selectedContent)
        }
        else {
            const updatedSections = replaceSection();
            const updatedCard: CardType = {...selectedCard, sections: updatedSections};
            dispatch(cardsSlice.actions.setUpdatedCard({updatedCard: updatedCard}));
        }
        setIsEdit(!isEdit);
    }

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        const updated = content.map( (section, idx) => {
            if (idx === selectedSection) return event.target.value;
            else return section
        });
        setContent(updated)
        setEdittedContent(event.target.value);
    }

    const replaceSection = () => {
        switch (selectedSection) {
            case Section.Why:
                return {...selectedCard.sections, why: edittedContent };
            case Section.What:
                return {...selectedCard.sections, what: edittedContent };
            case Section.How:
                return {...selectedCard.sections, how: edittedContent };
            case Section.Results:
                return {...selectedCard.sections, results: edittedContent };
            default:
                return selectedCard.sections;
        }
    }

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
                {!isEdit && (<Typography align={"justify"} className={classes.body} >
                    {content[selectedSection]}
                </Typography>)}
                { (isEdit) && ( <div className={classes.text}>
                    <TextField inputProps={{ style: { textAlign: 'justify', lineHeight: 1.5 }}} defaultValue={edittedContent} fullWidth onChange={onTextChange} multiline={true} variant={"outlined"}/>
                </div>)}

            </CardContent>
            <CardActions className={classes.edit} >
                <IconButton  onClick={onEditClick}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}