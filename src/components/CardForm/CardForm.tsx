import React, {useState} from "react";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Dialog from "@material-ui/core/Dialog";

type NewCardFormProps = {
    handleClose: () => void;
}

const CardForm = ({handleClose} : NewCardFormProps) => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            minHeight: 350,
            overflow: 'auto',

        },
        textField: {
            margin: 8,
        },
    })
    const classes = useStyles();

    const handleTextChange = () => {console.info("Text changed")}
    // const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.name === "what" || event.target.name === "why" || event.target.name === "how" || event.target.name === "results") {
    //         const newSections = {...newCard.sections, [event.target.name]: event.target.value};
    //         setNewCard({...newCard, sections: newSections});
    //     } else {
    //         setNewCard({...newCard, [event.target.name]: event.target.value})
    //     }
    // }

    return (
            <Card className={classes.root}>
                <CardContent>
                    <form noValidate autoComplete="off">
                        <div className={classes.textField}>
                            <TextField fullWidth label="Title" name="title" variant="filled"  onChange={handleTextChange}/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Authors"  variant="filled" onChange={handleTextChange}  name="authors"/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Journal" name="journal" variant="filled" onChange={handleTextChange}/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Date" name="date" variant="filled"  onChange={handleTextChange}/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="Why is this work important?" variant="filled"  onChange={handleTextChange}  name="why" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="What do they propose?" variant="filled"  onChange={handleTextChange}  name="what" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="How does it work?" variant="filled"  onChange={handleTextChange}  name="how" multiline/>
                        </div>
                        <div className={classes.textField}>
                            <TextField fullWidth label="What are the results?" variant="filled"  onChange={handleTextChange}  name="results" multiline />
                        </div>
                    </form>
                    <Box paddingTop={1}>
                        <Button variant="outlined" onClick={() => {console.info("Nothing for now")}}>Add card</Button>
                    </Box>

                </CardContent>
            </Card>
    )
}

export default CardForm;