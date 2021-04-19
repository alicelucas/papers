import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import {cardsSlice, selectedSectionSelector} from "../../../store/cardsSlice";
import {Section} from "../../../types/Section";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../Card.css";


export const BackButton = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const selectedSection = useSelector(selectedSectionSelector);

    const onPreviousSectionClick = () => {
        if (selectedSection - 1 === -1) return;
        else {
            dispatch(cardsSlice.actions.setSelectedSection({section: (selectedSection - 1) as Section}))
        }
    };

    if (selectedSection === 0) return (
        <IconButton disabled className={classes.icon} onClick={onPreviousSectionClick}>
            <ArrowBackIcon fontSize={"large"}/>
        </IconButton>
    )
    else {
        return (
            <IconButton className={classes.icon} onClick={onPreviousSectionClick}>
                <ArrowBackIcon fontSize={"large"}/>
            </IconButton>)
    }

}