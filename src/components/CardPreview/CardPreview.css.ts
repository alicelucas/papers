import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 400,
        height: "100%",
    },
    labelContainer: {
      paddingBlock: "6px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    container: {
        height: "100%",
        margin: "12px"
    },
    dialog: {
        position: 'absolute',
        top: "150px"
    },
    media: {
        // height: 200,
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
        // lineHeight: 1.0
    },
    authors: {
        marginTop: 12,
        fontSize: 14,
    },
    title: {
        lineHeight: 1.2,
    }
}));

export default useStyles;