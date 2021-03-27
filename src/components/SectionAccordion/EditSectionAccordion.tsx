import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';
import {useDispatch, useSelector} from "react-redux";
import {cardsSlice, selectedCardSelector, selectedSectionSelector} from "../../store/slice";
import {Section} from "../../types/Section";
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
    isEdit: boolean,
    onSwitch: () => void;
}

export const EditSectionAccordion = ( { content, isEdit, onSwitch } : EditSectionAccordionProps) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const selectedCard = useSelector(selectedCardSelector);
    const selectedSection = useSelector(selectedSectionSelector);

    const [edittedContent, setEdittedContent] = useState<string>(content);

    if (!isEdit) return <React.Fragment/>;

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
        const updatedCard: Card = {...selectedCard, sections: updatedSections};
        dispatch(cardsSlice.actions.setUpdatedCard({updatedCard: updatedCard}));
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