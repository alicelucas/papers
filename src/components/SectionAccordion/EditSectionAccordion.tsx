import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';
import {useDispatch, useSelector} from "react-redux";
import {
    cardsSlice,
    selectedCardSelector,
    selectedSectionContentSelector,
    selectedSectionSelector
} from "../../store/slice";
import {Card} from "../../types/Card";
import axios from "axios";
import {PayloadAction} from "@reduxjs/toolkit";
import {Section} from "../../types/Section";

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

    const dispatch = useDispatch();

    const selectedCard = useSelector(selectedCardSelector);
    const selectedSection = useSelector(selectedSectionSelector);

    const [edittedContent, setEdittedContent] = useState<string>(content);

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

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setEdittedContent(event.target.value)
    }

    const handleSaveClick = () => {
        const updatedSections = replaceSection();
        const updatedCard = {...selectedCard, sections: updatedSections};
        axios.post("http://127.0.0.1:8000/replaceCard", updatedCard).then( (response) => {
            dispatch(cardsSlice.actions.replaceSelectedCard({card: updatedCard}));
        });
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