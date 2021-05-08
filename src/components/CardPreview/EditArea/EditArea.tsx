import React from "react"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import useStyles from "../CardPreview.css";

export const EditArea = () => {
    const classes = useStyles();
    return  <Container className={classes.editAreaContainer}>
        <Button onClick={() =>{console.info("clicking")}} size="small" >
            <DeleteOutlinedIcon className={classes.editIcon}/>
        </Button>
        <Button onClick={() =>{console.info("clicking")}} size="small" >
            <EditOutlinedIcon className={classes.editIcon}/>
        </Button>
    </Container>
}