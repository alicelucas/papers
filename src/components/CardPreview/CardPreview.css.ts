import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 350,
        height: "100%",
        // height: 200
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