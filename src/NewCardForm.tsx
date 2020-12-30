import React from "react";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import useStyles from "./Card.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const NewCardForm = () => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField id="standard-basic" label="Title"/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Authors" />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Summary" multiline rows={4} />
                    </div>
                </form>
                <Box paddingTop={1}>
                    <Button variant="outlined">Add card</Button>
                </Box>

            </CardContent>
        </Card>
    )
}

export default NewCardForm;
