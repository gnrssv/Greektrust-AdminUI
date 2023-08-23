import { deepMerge} from "@mui/utils";
import * as style from "@mui/material/styles";
import {green,purple} from "@mui/material/colors";
const custom = style.createTheme({
    palette : {
        primary :{
            main : '#228B22',

        },
        secondary : {
            main : '#f50057'
        },
    },
    typography : {
        fontFamily : "Helvetica",
        fontSize : 10,
        fontWeight : "bold",
    },
});

const customary = style.createTheme({
    palette : {
        primary : {
            main : '#ff0000',
        },
    },
});

export default custom;