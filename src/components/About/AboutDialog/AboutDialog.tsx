import React from "react"
import {Dialog} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../About.css";
import Box from "@material-ui/core/Box";

type AboutDialogProps = {
    onClose: () => void;
    open: boolean;
}

export const AboutDialog = ({ onClose, open }: AboutDialogProps) => {

    const classes = useStyles();

    return <Dialog   maxWidth="lg" onClose={onClose} open={open}>
        <DialogContent className={classes.paper}>
            <Grid style={{display: 'inline-block'}} container>
                <Typography className={classes.text}>
                    Hi there! Here's a bit of information about what this web app is for.
                </Typography>
                <br/>
                <Typography className={classes.text}>
                    After reading a paper, I usually write down the answer to these four questions:
                </Typography>
                <br/>
                <Typography component="div" >
                    <Box fontStyle="italic">
                    Q1: "Why is this work important?" </Box>
                </Typography>
                <Typography className={classes.text}>
                    This gives me a sense of the application of the paper and why it is important. It helps me put things into context and understand the rest of the content of the paper better.
                </Typography>
                <br/>
                <Typography component="div">  <Box fontStyle="italic">
                    Q2: "How is this work different from other existing works?" </Box></Typography>
                <Typography className={classes.text}>
                    This tells us what is new or different about the method proposed by the authors, when comparing against the rest of the current literature. This should point out the key contribution of the paper.
                </Typography>
                <br/>
                <Typography component="div">
                    <Box fontStyle="italic">
                    Q3: "What do they propose?" </Box></Typography>
                <Typography className={classes.text}>
                    This answer delves into some of the technical details of the paper, although it still tries to avoid the nitty-gritty and still gives the big picture idea.
                </Typography>
                <br/>
                <Typography component="div">    <Box fontStyle="italic">
                    Q4: "What are the results?" </Box>
                </Typography>
                <Typography className={classes.text}>
                    This provides the interesting or significant results that are particularly important. Any additional comments or thoughts I have would be written there as well.
                </Typography>
                <br/>
                <br/>
                <Typography className={classes.text}>
                    Whenever I need to refresh my memory about a given paper, I read the answers to these four questions. This web app allows me to store all of these summaries in a single place.
                </Typography>
            </Grid>
        </DialogContent>
        {/*<DialogContent >*/}
        {/*    /!*<Grid container spacing={2}>*!/*/}
        {/*    /!*    <Grid item xs={6}>*!/*/}
        {/*    /!*        <Grid container></Grid>*!/*/}
        {/*    /!*    </Grid>*!/*/}
        {/*    /!*</Grid>*!/*/}
        {/*</DialogContent>*/}
    </Dialog>
}