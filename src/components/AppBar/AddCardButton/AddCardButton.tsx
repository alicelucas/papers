import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../AppBar/AppBar.css";

export const AddCardButton = () => {
    const classes = useStyles();

    return <Button color="inherit"><Typography className={classes.title} >Add Card</Typography></Button>

}
