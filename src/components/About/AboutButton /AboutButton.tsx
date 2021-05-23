import React, {useState} from "react"
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../../AppBar/AppBar/AppBar.css";
import InfoIcon from '@material-ui/icons/Info';
import IconButton from "@material-ui/core/IconButton";
import {AboutDialog} from "../AboutDialog/AboutDialog";

export const AboutButton = () => {
    const classes = useStyles();

    const [openAboutDialog, setOpenAboutDialog] = useState<boolean>(false);

    const onAboutButtonClick = () => {
        setOpenAboutDialog(true)
    }
    const onAboutDialogClose = () => {
        setOpenAboutDialog(false)
    }
    return <React.Fragment>
        <Button onClick={onAboutButtonClick}>
            <IconButton>
                <InfoIcon className={classes.aboutIcon}/>
            </IconButton>
            <Typography className={classes.title} >About</Typography>
        </Button>
        <AboutDialog onClose={onAboutDialogClose} open={openAboutDialog}/>
    </React.Fragment>
}