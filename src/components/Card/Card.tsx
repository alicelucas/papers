import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
    header: {
      backgroundColor: "#6573c3"
    },
    root: {
        minWidth: 275,
    },
    icon: {
        color: "#6573c3",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginTop: 6,
        marginBottom: 24,
        flexGrow: 1,
        textAlign: 'center',
    },
});

export default function OutlinedCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader className={classes.header} title={"Title"} subheader={"Authors here"}/>
            <CardContent>
                <Typography className={classes.pos} variant="h6" component="h2">
                    Why is this work important?
                </Typography>
                <Typography variant="body1" component="p">
                    It is important because...
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton className={classes.icon}>
                    <ArrowBackIcon fontSize={"large"}/>
                    <ArrowForwardIcon fontSize={"large"}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}