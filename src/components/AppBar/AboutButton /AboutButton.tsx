import React from "react"
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../AppBar/AppBar.css";
import InfoIcon from '@material-ui/icons/Info';
import IconButton from "@material-ui/core/IconButton";

export const AboutButton = () => {
    const classes = useStyles();
    return <React.Fragment>
        <Button>
            <IconButton>
                <InfoIcon className={classes.aboutIcon}/>
            </IconButton>
            <Typography className={classes.title} >About</Typography>
        </Button>
    </React.Fragment>
}