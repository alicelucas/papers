import React from "react";
import {TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';

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
    id: string,
    switchMode: () => void;
}

export const EditSectionAccordion = ( { content, id, switchMode } : EditSectionAccordionProps) => {
    const classes = useStyles();

    // const dispatch = useDispatch();
    // dispatch(titleSlice.actions.update( ({title: "An updated tittle"})))

    const handleSaveClick = () => {
        console.info(id)
        // const updatedCard = {
        //
        // }
        switchMode();
    }

    return (
        <React.Fragment>
            <TextField InputProps={ {className: classes.input}} fullWidth defaultValue={content} id="filled-basic" multiline={true} variant="filled" />
            <IconButton onClick={handleSaveClick}>
                <CheckIcon/>
            </IconButton>
        </React.Fragment> )
}