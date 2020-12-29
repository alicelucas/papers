import React from "react";
import SimpleCard from "./SimpleCard";
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

const NewCardForm = () => {
    return (
        <Card>
            <CardContent>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                </form>

            </CardContent>
        </Card>
        // <SimpleCard title={"NEW TITLE"} authors={"NEW AUTHOR"} summary={"NEW SUMMARY"}/>
    )
}

export default NewCardForm;
