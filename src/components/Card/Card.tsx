import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
    action: {
      justifyContent: "space-between"
    },
    body: {
      marginLeft: 20,
        marginRight: 20,
        whiteSpace: 'pre-line'
    },
    header: {
      backgroundColor: "#6573c3"
    },
    root: {
        minWidth: 275,
    },
    icon: {
        color: "#6573c3",
        marginRight: "10px",
        marginLeft: "10px"
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
            <CardHeader className={classes.header} title={"Title"} subheader={"Authors here and journal and date"}/>
            <CardContent>
                <Typography className={classes.pos} variant="h6" component="h2">
                    Why is this work important?
                </Typography>
                <Typography align={"justify"} className={classes.body} >
                    The contrastive learning idea (of making representations of an image agree with each other)
                    is not new; it dates back to a Becker & Hintor paper in 1992. But previously proposed contrastive
                    learning requires specialized architecture or a memory bank. \n

                    This new framework removes the need
                    for that. They spell out the necessary elements for having a successful simple contrastive learning
                    procedure.
                </Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <IconButton className={classes.icon}>
                    <ArrowBackIcon fontSize={"large"}/>
                </IconButton>
                <IconButton className={classes.icon}>
                    <ArrowForwardIcon fontSize={"large"}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}