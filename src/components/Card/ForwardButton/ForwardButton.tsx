import {cardsSlice, selectedSectionSelector} from "../../../store/cardsSlice";
import {Section} from "../../../types/Section";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../Card.css";

export const ForwardButton = () => {

    const classes = useStyles();

    const selectedSection = useSelector(selectedSectionSelector)

    const dispatch = useDispatch();

    const onNextSectionClick = () => {
        if (selectedSection + 1 === 4) return;
        else {
            dispatch(cardsSlice.actions.setSelectedSection({section: (selectedSection + 1) as Section}));
        }
    };

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