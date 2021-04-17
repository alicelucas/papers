import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    arrows: {
        justifyContent: "space-between"
    },
    body: {
        marginLeft: 20,
        marginRight: 20,
        whiteSpace: 'pre-line'
    },
    header: {
        backgroundColor: "#6573c3",
        color: "white",
        whiteSpace: 'pre-line'
    },
    root: {
        minWidth: 275,
        minHeight: 350,
        overflow: 'auto',

    },
    icon: {
        color: "#6573c3",
        marginRight: "10px",
        marginLeft: "10px"
    },
    text: {
        // padding: "28 px",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginTop: -70,
        marginBottom: 24,
        flexGrow: 1,
        textAlign: 'center',
    },
});