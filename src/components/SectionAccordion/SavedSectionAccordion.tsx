import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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

type SavedSectionAccordionProps = {
    content: string
    onSwitch: () => void;
}

export const SavedSectionAccordion = ({content, onSwitch} : SavedSectionAccordionProps) => {
    const classes = useStyles();

    return (<React.Fragment>
            <Typography className={classes.text}>
                {content}
            </Typography>
            <IconButton onClick={onSwitch}>
                <EditIcon />
            </IconButton>
        </React.Fragment>
    )
}