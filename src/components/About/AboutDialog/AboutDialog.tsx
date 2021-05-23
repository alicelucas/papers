import React from "react"
import {Dialog} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {useStyles} from "../About.css";

type AboutDialogProps = {
    onClose: () => void;
    open: boolean;
}

export const AboutDialog = ({ onClose, open }: AboutDialogProps) => {

    const classes = useStyles();

    return <Dialog  maxWidth="lg" onClose={onClose} open={open}>
        <DialogContent className={classes.aboutDialog}>
            <Grid style={{display: 'inline-block'}} container>
                <Typography className={classes.text}>
                    Each card shown here answers the following four questions:
                </Typography>
                <br/>
                <Typography className={classes.text} variant={"h6"}>Why is this work important?</Typography>
                <Typography className={classes.text}>
                    This gives me a sense of the application of the paper and why it is important. It helps me put things into context and understand the rest of the content of the paper better.
                </Typography>
                <br/>
                <Typography className={classes.text} variant={"h6"}>How is this work different from other existing works?</Typography>
                <Typography className={classes.text}>
                    This tells me what is new or different about the method proposed by the authors, when comparing against the rest of the current literature.
                </Typography>
                <br/>
                <Typography className={classes.text} variant={"h6"}>What do they propose?</Typography>
                <Typography className={classes.text}>
                    This answer delves into some of the technical details of the paper, although it still tries to avoid the nitty-gritty and still gives the big picture idea.
                </Typography>
                <br/>
                <Typography className={classes.text} variant={"h6"}>What are the results?</Typography>
                <Typography className={classes.text}>
                    This provides any interesting or significant results that are particularly important. Any additional comments or thoughts I have would be written there as well.
                </Typography>
                <br/>
                <br/>
                <Typography className={classes.text}>
                    I use these four questions, and their answers, whenever I need to go back to a paper to refresh my memory and what it proposes and how it does it.
                    This web app allows me to store all of these summaries in a single place.
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