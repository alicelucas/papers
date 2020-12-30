import React from "react";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import useStyles from "./Card.css";
import Typography from "@material-ui/core/Typography";

const NewCardForm = () => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField id="standard-basic" label="Title"
                        />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Authors" />
                    </div>
                    <TextField id="standard-basic" label="Summary" multiline rows={4} />
                </form>

            </CardContent>
        </Card>
        // <SimpleCard title={"NEW TITLE"} authors={"NEW AUTHOR"} summary={"NEW SUMMARY"}/>
    )
}

export default NewCardForm;
