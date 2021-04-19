import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import React from "react";
import useStyles from "./CardPreview.css";
import {Card} from "../../types/Card";

type LabelsProps = {
    card: Card
}
export const Labels = ( {card}: LabelsProps) => {

    const classes = useStyles();

    return (
        <Container className={classes.labelContainer}>
            {card.labels.map( (label: string, idx: number) => {
                if (label.length) return (
                    <Button  key={label} className={classes.labels} size="small" variant="outlined">
                        {label}
                    </Button>
                )
                else {
                    return <React.Fragment key={idx} />
                }
            })}
        </Container>
    )
}