import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 400,
        height: "100%",
    },
    container: {
        height: "100%"
    },
    dialog: {
        position: 'absolute',
            top: "200px"
    },
    media: {
        // height: 200,
    },
    labels: {
        position: "relative",
        bottom: "2px"
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