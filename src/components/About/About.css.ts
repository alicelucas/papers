import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
                borderWidth: 10,
                borderColor: "#6573c3",
                borderStyle: "solid",
                backgroundColor: "#fff",
                color: "#101010"
            },
        text: {
            // color: "white"
        },
    }))
