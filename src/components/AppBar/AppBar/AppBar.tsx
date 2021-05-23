import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {SearchField} from "../SearchField/SearchField";
import {useStyles} from "./AppBar.css";
import {AddCardButton} from "../AddCardButton/AddCardButton";
import {HomeButton} from "../HomeButton/HomeButton";

export const CardAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow} >
            <AppBar style={{background: "#6573c3"}}>
                <Toolbar>
                <HomeButton/>
                    <SearchField/>
                    <div className={classes.grow} />
                    <AddCardButton/>
                </Toolbar>
            </AppBar>
        </div>
    );
}