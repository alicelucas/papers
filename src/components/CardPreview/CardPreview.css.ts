import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 400,
        position: "relative",
        textAlign: "center",
        height: "100%",
    },
    editAreaContainer: {
        position: "absolute",
        bottom: "5px",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "0px",
        paddingRight: "0px"
    },
    editIcon: {
        color: "#6573c3"
    },
    labelContainer: {
      paddingBlock: "6px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    container: {
        height: "100%",
        margin: "12px",

    },
    dialog: {
        position: 'absolute',
        top: "0px"
    },
    labels: {
        position: "relative",
        bottom: "2px",
        color: "#6573c3",
        margin: "2px"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    info: {
        fontSize: 14,
    },
    authors: {
        marginTop: 12,
        fontSize: 14,
    },
    removeDialogBox: {
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
        lineHeight: 1.2,
    }
}));

export default useStyles;