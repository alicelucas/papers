import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';
import {useSelector} from "react-redux";
import {selectedCardSelector, selectedSectionContentSelector, selectedSectionSelector} from "../../store/slice";
import {Card} from "../../types/Card";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            paddingTop: 2,
        },
        text: {
            whiteSpace: 'pre-line'
        }
    }),
);

type EditSectionAccordionProps = {
    content: string,
    onSwitch: () => void;
}

export const EditSectionAccordion = ( { content, onSwitch } : EditSectionAccordionProps) => {
    const classes = useStyles();

    const selectedCard = useSelector(selectedCardSelector);
    const selectedSection = useSelector(selectedSectionSelector);

    const [edittedContent, setEdittedContent] = useState<string>(content);

    // const handleEditCard = async (newSection) => {
    //     const newCard: CardPreview = {
    //
    //     }
    // create new card object
    // const newCard: CardPreview = {
    //     authors: cardContent.authors,
    //     date: cardContent.date,
    //     journal: cardContent.journal,
    //     title: cardContent.title
    // }
    //
    // axios.post("http://127.0.0.1:8000/addCard", newCard).then( (response) => {
    //     refreshCards();
    // }).catch( (error) => console.info(error));

    // }

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setEdittedContent(event.target.value)
    }

    const handleSaveClick = () => {
        // const selectedContent = selectedCard.sections;
        console.info(edittedContent);
        // console.info(selectedCard._id)
        // console.info(selectedSection)
        onSwitch();
    }

    return (
        <React.Fragment>
            <TextField InputProps={ {className: classes.input}} defaultValue={edittedContent} fullWidth id="filled-basic" onChange={handleTextChange} multiline={true} variant="filled" />
            <IconButton onClick={handleSaveClick}>
                <CheckIcon/>
            </IconButton>
        </React.Fragment> )
}