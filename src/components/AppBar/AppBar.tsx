import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {SearchField} from "./SearchField/SearchField";
import {useStyles} from "./AppBar.css";

export default function CardAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.grow} >
            <AppBar style={{background: "#6573c3"}}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Paper flashcards
                    </Typography>
                    <SearchField/>
                    <div className={classes.grow} />
                    <div className={classes.grow} />
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </div>
    );
}